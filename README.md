# PAA ANOLI

Next.js 15 + TypeScript + Tailwind CSS + next-intl (vi / en / lo / zh).

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000/vi](http://localhost:3000/vi)

## Static export (Hostinger)

`out/` được tạo bằng Next.js static export (`output: "export"`), không dùng `next export` riêng.

### Cách xuất

Trong `next.config.mjs`:

```js
output: "export",
trailingSlash: true,
images: {
  unoptimized: true,
},
```

Chạy:

```bash
npm run build
```

(`export` trong `package.json` cũng chỉ gọi `next build`.) Build xong HTML/CSS/JS nằm ở `out/`.

### Cách đẩy lên hosting

Có 2 mức:

1. **Chỉ build:** `npm run build` → xem `out/`
2. **Build + sync:** `npm run deploy:static` → chạy `scripts/deploy-static.sh`:
   - `npm run build`
   - rsync `out/` sang repo hosting tại `STATIC_DEPLOY_DIR` (trong `.env.local`)
   - giữ nguyên `.git` của repo hosting (không bỏ `.git` vào `out/`)
   - commit/push thủ công trong repo hosting

Setup sync:

```bash
cp .env.local.example .env.local
# sửa STATIC_DEPLOY_DIR=/absolute/path/to/hosting-repo
npm run deploy:static
```

## Locales

`/vi/` · `/en/` · `/lo/` · `/zh/` (`trailingSlash: true`)

## Structure

- `messages/` — copy đa ngôn ngữ
- `public/images/` — assets Figma
- `src/components/` — Homepage, WhoWeAre, Investment, Business, Sector, PaaAgro, Contact
