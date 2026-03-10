import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
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
      css: true, // 抽离 CSS 到单独文件
      compileTemplate: true
    }),
    terser()
  ],
  external: ['vue', 'element-ui'] // 不打包这些
}