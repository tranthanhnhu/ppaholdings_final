#!/usr/bin/env bash
# Build static site into out/ (ephemeral — Next.js wipes this each build),
# then sync into out_hostinger/ which is a SEPARATE git repo (Hostinger).
# .git inside out_hostinger/ is always preserved.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ -f "$ROOT_DIR/.env.local" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$ROOT_DIR/.env.local"
  set +a
fi

# Default: ./out_hostinger next to the Next.js source (not out/)
DEPLOY_DIR="${STATIC_DEPLOY_DIR:-$ROOT_DIR/out_hostinger}"
HOSTING_REMOTE="${STATIC_DEPLOY_GIT_REMOTE:-https://github.com/tranthanhnhu/ppaholdings_final_outhostinger.git}"

ensure_deploy_repo() {
  if [[ -d "$DEPLOY_DIR/.git" ]]; then
    return 0
  fi

  if [[ -d "$DEPLOY_DIR" ]] && [[ -n "$(ls -A "$DEPLOY_DIR" 2>/dev/null || true)" ]]; then
    echo "Error: $DEPLOY_DIR exists but has no .git/"
    echo "Move/remove it, or init the hosting repo there manually."
    exit 1
  fi

  echo "==> Cloning hosting repo into $DEPLOY_DIR"
  echo "    remote: $HOSTING_REMOTE"
  git clone "$HOSTING_REMOTE" "$DEPLOY_DIR"
}

ensure_deploy_repo

echo "==> Building static export (out/)..."
npm run build

if [[ ! -d "$ROOT_DIR/out" ]]; then
  echo "Error: out/ was not created. Check next.config (output: \"export\")."
  exit 1
fi

echo "==> Syncing out/ → $DEPLOY_DIR (keeping .git)"
# Never delete/overwrite the hosting repo's git metadata.
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.github/' \
  --exclude 'README.md' \
  "$ROOT_DIR/out/" \
  "$DEPLOY_DIR/"

# Next may omit dotfiles from public/; ensure Apache rules land on the host.
if [[ -f "$ROOT_DIR/public/.htaccess" ]]; then
  cp "$ROOT_DIR/public/.htaccess" "$DEPLOY_DIR/.htaccess"
  cp "$ROOT_DIR/public/.htaccess" "$ROOT_DIR/out/.htaccess"
fi

echo ""
echo "Done. Static files are in: $DEPLOY_DIR"
echo "  (source repo: PAA_FINAL | hosting repo: out_hostinger/.git → $HOSTING_REMOTE)"
echo ""
echo "Next (commit from the hosting folder):"
echo "  cd \"$DEPLOY_DIR\""
echo "  git status"
echo "  git add -A && git commit -m \"Deploy static site\" && git push"
