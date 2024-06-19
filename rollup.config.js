// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "dist/index.js",
    output: {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [resolve(), commonjs()],
};
