import * as esbuild from "esbuild";

const srcPath = "src/index.ts";
const distDir = "dist";

const fmts = [
    {
        format: "iife",
        globalName: "kiboom",
        outfile: `${distDir}/kiboom.js`,
        footer: {
            js: "window.kiboom = kiboom.default",
        },
    },
    { format: "cjs", outfile: `${distDir}/kiboom.cjs` },
    { format: "esm", outfile: `${distDir}/kiboom.mjs` },
];

const config = {
    bundle: true,
    sourcemap: true,
    minify: true,
    keepNames: true,
    loader: {
        ".png": "dataurl",
        ".glsl": "text",
        ".mp3": "binary",
    },
    entryPoints: [srcPath],
};

export async function build() {
    return Promise.all(fmts.map((fmt) => {
        return esbuild.build({
            ...config,
            ...fmt,
        }).then(() => console.log(`-> ${fmt.outfile}`));
    }));
}
