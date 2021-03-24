#!/usr/bin/env node

const esbuild = require("esbuild");
const esbuildPluginTsc = require("esbuild-plugin-tsc");

console.time("⚡ Done in");
esbuild
  .build({
    platform: "node",
    outfile: "lib/esbuild-prog/bundle.js",
    bundle: true,
    entryPoints: ["./src/index.ts"],
    plugins: [
      esbuildPluginTsc({
        force: true,
      }),
    ],
  })
  .then((build) => {
    console.timeEnd("⚡ Done in");
  })
  .catch((err) => {
    process.stderr.write(err.stderr);
    process.exit(1);
  });
