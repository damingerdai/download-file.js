import { uglify } from "rollup-plugin-uglify";
import { minify } from 'rollup-plugin-esbuild'

export default [
  {
    input: "src/index.js",
    output: {
      file: "lib/downloadFile.js",
      format: "iife",
      name: "downloadFile",
    },
  },
  {
    input: "src/index.js",
    output: {
      file: "lib/downloadFile.min.js",
      format: "iife",
      name: "downloadFile",
      sourcemap: true,
    },
    plugins: [
      minify({
        sourcemap: true,
      }),
    ],
  },
];
