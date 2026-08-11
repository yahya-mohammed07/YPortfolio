/**
 * Injects the app's markup into dist/index.html at build time.
 *
 * The site is a single client-rendered page, so a crawler that doesn't run JS
 * (or defers it, as Googlebot does) would otherwise see an empty <div id="root">.
 * This bakes the real content into the shipped HTML; the client still boots
 * normally and takes over on load.
 */
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "dist/index.html");
const serverDir = resolve(root, "dist-ssr");

const { render } = await import(pathToFileURL(resolve(serverDir, "entry-server.js")).href);

const html = readFileSync(htmlPath, "utf8");
const marker = '<div id="root"></div>';

if (!html.includes(marker)) {
  throw new Error(`prerender: '${marker}' not found in dist/index.html`);
}

writeFileSync(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(serverDir, { recursive: true, force: true });

console.log("prerendered dist/index.html");
