# PAA ANOLI

Next.js 15 + TypeScript + Tailwind CSS + next-intl (vi / en / lo / zh).

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000/vi](http://localhost:3000/vi)

## Static export (Hostinger)

Hai thư mục khác nhau:

| Folder | Vai trò | Git |
|--------|---------|-----|
| `out/` | Build tạm của Next.js | **Không** — bị xóa mỗi lần `next build` |
| `out_hostinger/` | Bản tĩnh để đẩy Hostinger | **Có** — repo riêng [`ppaholdings_final_outhostinger`](https://github.com/tranthanhnhu/ppaholdings_final_outhostinger.git), `.git` được giữ khi sync |

### Build chỉ để xem

```bash
npm run build
```

→ xem HTML trong `out/`.

### Deploy (build + sync, giữ `.git`)

```bash
npm run deploy:static
```

Script sẽ:

1. Clone `ppaholdings_final_outhostinger` vào `out_hostinger/` nếu chưa có
2. `next build` → `out/`
3. `rsync out/ → out_hostinger/` **bỏ qua** `.git/` (không mất remote/history)
4. Bạn commit/push trong `out_hostinger/`:

```bash
cd out_hostinger
git add -A && git commit -m "Deploy static site" && git push
```

Tuỳ chọn trong `.env.local` (xem `.env.local.example`):

- `STATIC_DEPLOY_DIR` — đổi đường dẫn (mặc định `./out_hostinger`)
- `STATIC_DEPLOY_GIT_REMOTE` — remote clone lần đầu

## Locales

`/vi/` · `/en/` · `/lo/` · `/zh/` (`trailingSlash: true`)

## Structure

- `messages/` — copy đa ngôn ngữ
- `public/images/` — assets Figma
- `src/components/` — Homepage, WhoWeAre, Investment, Business, Sector, PaaAgro, Contact
- `out_hostinger/` — repo Hostinger (gitignore ở repo nguồn)
