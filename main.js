"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "[v1 placeholder] main.ts wrote this line.\n";
(0, fs_1.writeFileSync)((0, path_1.join)(outDir, "entry.txt"), line, { encoding: "utf8" });
