import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import cssOnly from 'rollup-plugin-css-only'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const name = 'MSearch'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: name,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: false, // 不注入到 JS，而是把样式转成 import，交给 css-only 处理
      compileTemplate: true
    }),
    cssOnly({
      output: 'm-search-component-vue.css' // 在 dist 目录下生成这个 CSS 文件
    }),
    terser()
  ],
  external: ['vue', 'element-ui'] // 不打包这些
}