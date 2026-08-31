import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, "dist", "public");
const inputPath = path.join(distDir, "index.html");
const outputPath = path.join(projectRoot, "mohammed-elmoghani-portfolio.html");
const liveOrigin = "https://mohammedp-aj8fgiyo.manus.space";

let html = fs.readFileSync(inputPath, "utf8");

html = html.replace(/<link rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g, (_match, href) => {
  const cssPath = path.join(distDir, href.replace(/^\//, ""));
  const css = fs.readFileSync(cssPath, "utf8");
  return `<style>\n${css}\n</style>`;
});

html = html.replace(/<script type="module"[^>]+src="([^"]+)"[^>]*><\/script>/g, (_match, src) => {
  const jsPath = path.join(distDir, src.replace(/^\//, ""));
  const js = fs.readFileSync(jsPath, "utf8");
  return `<script type="module">\n${js}\n</script>`;
});

html = html.replaceAll('src="/manus-storage/', `src="${liveOrigin}/manus-storage/`);
html = html.replaceAll('href="/manus-storage/', `href="${liveOrigin}/manus-storage/`);
html = html.replace(/<script\s+defer\s+src="%VITE_ANALYTICS_ENDPOINT%\/umami"[^>]*data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"[^>]*><\/script>/g, "");
html = html.replace(/<title>[^<]*<\/title>/, "<title>Mohammed Elmoghani — Digital Marketing Specialist</title>");
html = html.replace('<html lang="en">', '<html lang="en" dir="ltr">');

fs.writeFileSync(outputPath, `<!-- Standalone export generated from the Mohammed Elmoghani portfolio.\n     Hosted visual assets are referenced from the live portfolio domain. -->\n${html}`);
console.log(outputPath);
