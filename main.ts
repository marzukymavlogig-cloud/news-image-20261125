// news-image-20261125 — "THE WORLD." front page for Wednesday, 25 Nov 2026.
//
// The entry image (entry.png, 1024x1024) is a newspaper front page drawn in
// poster.html and rendered to PNG in this session. This program copies it to
// the output directory, after validating that it is a whole, untruncated PNG
// within the competition limits (<=1 MiB, <=1024x1024).
//
// Node 22 stdlib only. No network. The image is located relative to this
// file (import.meta.url), never relative to the process working directory.

import { copyFileSync, readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1048576;
const MAX_DIM = 1024;

// PNG signature (8 bytes) + IHDR chunk (25 bytes) = 33 bytes; IEND chunk is
// 12 bytes, so a whole PNG is at least 45 bytes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const src = new URL("./entry.png", import.meta.url);
const buf = readFileSync(src);

if (buf.length < 45) {
  throw new Error("entry.png too small to be a whole PNG");
}
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
// IHDR must follow the signature: length 13, type "IHDR".
if (buf.readUInt32BE(8) !== 13 || buf.subarray(12, 16).toString("ascii") !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > MAX_DIM || height > MAX_DIM) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
if (buf.length > MAX_BYTES) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
// A genuine IEND chunk: length 0, type "IEND", CRC 0xae426082.
const tail = buf.subarray(buf.length - 12);
if (
  tail.readUInt32BE(0) !== 0 ||
  tail.subarray(4, 8).toString("ascii") !== "IEND" ||
  tail.readUInt32BE(8) !== 0xae426082
) {
  throw new Error("file may be truncated");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
console.log(`wrote ${dest} (${width}x${height}, ${buf.length} bytes)`);
