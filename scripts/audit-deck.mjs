#!/usr/bin/env node
/*
 * audit-deck.mjs — standalone Playwright audit of a local rendered HTML deck.
 *
 * Usage: node scripts/audit-deck.mjs <local-html-path> <out-dir>
 *
 * For automated audit during publish, the same logic lives in
 * scripts/lib/audit-deck.mjs and is called from scripts/publish-deck.mjs.
 */

import { auditDeck, printAuditReport } from "./lib/audit-deck.mjs"
import path from "node:path"

const htmlPath = process.argv[2]
const outDir = process.argv[3]
if (!htmlPath || !outDir) {
  console.error("usage: node audit-deck.mjs <local-html-path> <out-dir>")
  process.exit(1)
}

const report = await auditDeck(path.resolve(htmlPath), path.resolve(outDir))
const blocking = printAuditReport(report, path.basename(outDir))
console.log(`\nblocking issues: ${blocking}`)
process.exit(blocking > 0 ? 1 : 0)
