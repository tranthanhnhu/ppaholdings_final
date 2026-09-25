# PAA ANOLI — Homepage

Next.js 15 + TypeScript + Tailwind CSS + next-intl implementation of Figma **Homepage 2** (`PAA_ANOLI`).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000/vi](http://localhost:3000/vi)

Locales: `/vi` · `/en` · `/lo` · `/zh`

## Figma source

https://www.figma.com/design/te7TPXOOCdfxoWzNchx9XJ/PAA_ANOLI?node-id=164-1773

## Structure

- `messages/` — vi / en / lo / zh copy from Homepage 2
- `public/images/homepage/` — assets downloaded from Figma
- `src/components/Homepage/` — page sections
- Breakpoint: mobile Figma 375 (`< lg`) · desktop Figma 1440 (`lg+`)

## Fonts

Plus Jakarta Sans (primary). Noto Sans SC / Noto Sans Lao loaded for `zh` / `lo`.
