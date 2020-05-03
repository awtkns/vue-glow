import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify-es";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const config = {
  input: "src/entry.js",
  output: {
    name: "VueGlow",
    exports: "named"
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    buble(),
    uglify()
  ]
};

export default config;