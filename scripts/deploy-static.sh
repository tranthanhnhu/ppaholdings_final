#!/usr/bin/env bash
# Build static site into out/, then sync to a separate Hostinger/git hosting repo.
# Does NOT touch the hosting repo's .git — only mirrors out/ contents.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ -f "$ROOT_DIR/.env.local" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$ROOT_DIR/.env.local"
  set +a
fi

if [[ -z "${STATIC_DEPLOY_DIR:-}" ]]; then
  echo "Error: STATIC_DEPLOY_DIR is not set."
  echo "Add it to .env.local, e.g.:"
  echo '  STATIC_DEPLOY_DIR=/absolute/path/to/hosting-repo'
  exit 1
fi

if [[ ! -d "$STATIC_DEPLOY_DIR" ]]; then
  echo "Error: STATIC_DEPLOY_DIR does not exist: $STATIC_DEPLOY_DIR"
  exit 1
fi

echo "==> Building static export (out/)..."
npm run build

if [[ ! -d "$ROOT_DIR/out" ]]; then
  echo "Error: out/ was not created. Check next.config (output: \"export\")."
  exit 1
fi

echo "==> Syncing out/ → $STATIC_DEPLOY_DIR"
# Preserve hosting repo .git; mirror public site files only.
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.github/' \
  --exclude 'README.md' \
  "$ROOT_DIR/out/" \
  "$STATIC_DEPLOY_DIR/"

# Next may omit dotfiles from public/; ensure Apache rules land on the host.
if [[ -f "$ROOT_DIR/public/.htaccess" ]]; then
  cp "$ROOT_DIR/public/.htaccess" "$STATIC_DEPLOY_DIR/.htaccess"
  # Keep a copy inside out/ for inspecting local builds
  cp "$ROOT_DIR/public/.htaccess" "$ROOT_DIR/out/.htaccess"
fi

echo ""
echo "Done. Static files synced to: $STATIC_DEPLOY_DIR"
echo "Next (manual, in the hosting repo):"
echo "  cd \"$STATIC_DEPLOY_DIR\""
echo "  git status"
echo "  git add -A && git commit -m \"Deploy static site\" && git push"
