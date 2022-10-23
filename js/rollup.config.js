import { terser } from "rollup-plugin-terser";

export default {
    input: "index.ts",
    output: [
        {
            file: "build/bundle.js",
            format: "iife"
        },
        {
            file: "build/bundle.min.js",
            format: "iife",
            plugins: [terser()]
        }
    ]
}