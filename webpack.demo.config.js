const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './demo/main.js',
    output: {
        path: path.resolve(__dirname, 'dist-demo'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'demo'),
        port: 8080,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: { name: 'images/[name].[hash:8].[ext]' }
                }]
            },
            // 字体（含 element-icons.svg 可能被引用）
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?.*)?$/i,
                use: [{
                    loader: 'file-loader',
                    options: { name: 'fonts/[name].[hash:8].[ext]' }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './demo/index.html'
        })
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    }
}