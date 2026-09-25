import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const src = join(root, "public", ".htaccess");
const dest = join(root, "out", ".htaccess");

if (!existsSync(join(root, "out"))) {
  console.warn("postbuild-static: out/ missing — skip .htaccess copy");
  process.exit(0);
}

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log("postbuild-static: copied public/.htaccess → out/.htaccess");
}
