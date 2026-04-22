#!/usr/bin/env node
/*
 * publish-deck.mjs — publish one MARP deck to Vercel Blob for web viewing.
 *
 * For a given idea slug:
 *   1. Upload any `./polymash-logo.png` (or `./images/*.png`) image referenced
 *      in the deck source to Blob under `presentations/<idea-slug>/...`
 *   2. Rewrite the deck source so image refs point at absolute Blob URLs.
 *   3. Regenerate HTML + slide-1 PNG via marp-cli.
 *   4. Upload the HTML to Blob as `presentations/<idea-slug>/deck.html`.
 *   5. Upload the slide-1 PNG to Blob as `presentations/<idea-slug>-slide-1.png`.
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment.
 *
 * Usage:
 *   node scripts/publish-deck.mjs <idea-folder-name> [<deck-basename>]
 * Example:
 *   node scripts/publish-deck.mjs 004-multi-tenant-curator-platform deck
 */

import { put } from "@vercel/blob"
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const token = process.env.BLOB_READ_WRITE_TOKEN
if (!token) {
  console.error("BLOB_READ_WRITE_TOKEN is not set. export it from an .env.local first.")
  process.exit(1)
}

const [, , ideaFolder, deckBasenameArg] = process.argv
if (!ideaFolder) {
  console.error("usage: node scripts/publish-deck.mjs <idea-folder-name> [<deck-basename>]")
  process.exit(1)
}

const repoRoot = path.resolve(import.meta.dirname, "..")
const ideaSlug = ideaFolder.replace(/^\d+-/, "")
const ideaDir = path.join(repoRoot, "ideas", ideaFolder)
const presentationsDir = path.join(ideaDir, "presentations")
const exportsDir = path.join(ideaDir, "exports")

if (!fs.existsSync(presentationsDir)) {
  console.error(`no presentations/ folder at ${presentationsDir}`)
  process.exit(1)
}

const deckBasename =
  deckBasenameArg ||
  fs
    .readdirSync(presentationsDir)
    .find((f) => f.endsWith(".md") && !f.startsWith("."))
    ?.replace(/\.md$/, "")

if (!deckBasename) {
  console.error(`no .md deck found in ${presentationsDir}`)
  process.exit(1)
}

const deckSourcePath = path.join(presentationsDir, `${deckBasename}.md`)
if (!fs.existsSync(deckSourcePath)) {
  console.error(`no deck source at ${deckSourcePath}`)
  process.exit(1)
}

console.log(`\n[publish-deck] idea=${ideaFolder} deck=${deckBasename}.md`)

async function uploadFile(localPath, blobPathname, contentType) {
  const buffer = fs.readFileSync(localPath)
  const blob = await put(blobPathname, buffer, {
    access: "public",
    contentType,
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  })
  console.log(`  ✓ uploaded ${blobPathname} → ${blob.url}`)
  return blob.url
}

const source = fs.readFileSync(deckSourcePath, "utf8")

const imageRefs = [
  ...source.matchAll(/src="(\.\/[^"]+\.(png|jpg|jpeg|gif|svg))"/g),
].map((m) => m[1])
const uniqueImageRefs = [...new Set(imageRefs)]

console.log(
  `  found ${uniqueImageRefs.length} local image reference${uniqueImageRefs.length === 1 ? "" : "s"}`,
)

const localToBlobUrl = new Map()
for (const ref of uniqueImageRefs) {
  const localAbs = path.resolve(presentationsDir, ref)
  if (!fs.existsSync(localAbs)) {
    console.warn(`  ⚠ referenced image missing on disk: ${ref} (resolved ${localAbs})`)
    continue
  }
  const filename = path.basename(ref)
  const ext = path.extname(filename).toLowerCase().replace(".", "")
  const contentType =
    ext === "png"
      ? "image/png"
      : ext === "svg"
        ? "image/svg+xml"
        : ext === "gif"
          ? "image/gif"
          : "image/jpeg"
  const blobPathname = `presentations/${ideaSlug}/${filename}`
  const url = await uploadFile(localAbs, blobPathname, contentType)
  localToBlobUrl.set(ref, url)
}

let rewritten = source
for (const [ref, url] of localToBlobUrl) {
  const escaped = ref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  rewritten = rewritten.replace(new RegExp(`src="${escaped}"`, "g"), `src="${url}"`)
}

const rewrittenSourceChanged = rewritten !== source
if (rewrittenSourceChanged) {
  fs.writeFileSync(deckSourcePath, rewritten, "utf8")
  console.log(`  ✎ rewrote ${uniqueImageRefs.length} image ref(s) in ${deckBasename}.md → Blob URLs`)
}

fs.mkdirSync(exportsDir, { recursive: true })

/**
 * Transform a dark-theme MARP source to a light-theme variant by substituting
 * the :root palette tokens and a handful of hardcoded greyscale colors. Orange
 * / blue / green / gold / red accent colors are preserved. The transform is
 * token-level — it does not re-render gradients or borders that use very
 * dark-on-dark subtle hex values (those may look slightly off on light bg;
 * acceptable for MVP, can be tuned later).
 */
function darkToLight(src) {
  let out = src
  out = out.replace(/--bg:\s*#[0-9a-fA-F]{3,8}/g, "--bg: #fafafa")
  out = out.replace(/--s:\s*#[0-9a-fA-F]{3,8}/g, "--s: #ffffff")
  out = out.replace(/--b:\s*#[0-9a-fA-F]{3,8}/g, "--b: #e5e5e5")
  out = out.replace(/--t:\s*#[0-9a-fA-F]{3,8}/g, "--t: #0c0c0c")
  out = out.replace(/--body:\s*#[0-9a-fA-F]{3,8}/g, "--body: #333333")
  out = out.replace(/--m:\s*#[0-9a-fA-F]{3,8}/g, "--m: #666666")
  out = out.replace(/--label:\s*#[0-9a-fA-F]{3,8}/g, "--label: #555555")
  out = out.replace(/background-color:\s*#0c0c0c/g, "background-color: #fafafa")
  out = out.replace(/rgba\(255,\s*255,\s*255,/g, "rgba(0,0,0,")
  out = out.replace(/color:\s*#aaa\b/g, "color: #555")
  out = out.replace(/color:\s*#555\b/g, "color: #888")
  out = out.replace(/color:\s*#151515\b/g, "color: #dddddd")
  return out
}

const lightSourcePath = path.join(presentationsDir, `.${deckBasename}.light.md`)
fs.writeFileSync(lightSourcePath, darkToLight(rewritten), "utf8")

const darkHtmlOut = path.join(exportsDir, `${deckBasename}.html`)
const lightHtmlOut = path.join(exportsDir, `${deckBasename}-light.html`)
console.log(`  → regenerating ${deckBasename}.html (dark) and ${deckBasename}-light.html`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${deckSourcePath}" -o "${darkHtmlOut}" --html --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${lightSourcePath}" -o "${lightHtmlOut}" --html --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)

const pdfOutPath = path.join(exportsDir, `${deckBasename}.pdf`)
console.log(`  → regenerating ${deckBasename}.pdf (dark)`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${deckSourcePath}" -o "${pdfOutPath}" --html --pdf --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)

const thumbnailTmpDir = fs.mkdtempSync(path.join(exportsDir, ".thumb-"))
const thumbnailStem = path.join(thumbnailTmpDir, `${deckBasename}-light`)
console.log(`  → rendering slide PNGs from light variant to extract slide-1`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${lightSourcePath}" -o "${thumbnailStem}.png" --html --images png --image-scale 2 --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)
const slideOnePath = fs
  .readdirSync(thumbnailTmpDir)
  .filter((f) => f.endsWith(".png"))
  .sort()[0]
const slideOneAbs = path.join(thumbnailTmpDir, slideOnePath)

const thumbnailBlobPath = `presentations/${ideaSlug}-slide-1.png`
const thumbUrl = await uploadFile(slideOneAbs, thumbnailBlobPath, "image/png")

fs.rmSync(thumbnailTmpDir, { recursive: true, force: true })
fs.unlinkSync(lightSourcePath)

const vercelBase = "https://ideas-inbox-mocha.vercel.app"
const vercelLightUrl = `${vercelBase}/ideas/${ideaFolder}/exports/${deckBasename}-light.html`
const vercelDarkUrl = `${vercelBase}/ideas/${ideaFolder}/exports/${deckBasename}.html`

console.log(`\n[publish-deck] done for ${ideaFolder}`)
console.log(`  HTML (light, default): ${vercelLightUrl}`)
console.log(`  HTML (dark):           ${vercelDarkUrl}`)
console.log(`  Thumbnail:             ${thumbUrl}`)
console.log(`  PDF:                   ${pdfOutPath} (local)`)
console.log(`\n  HTML files written to ${exportsDir} — commit + push for Vercel to serve them.`)
