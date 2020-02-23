const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode + "__entorno")
module.exports = {

    entry: './client/app.js', 

    output: {
        path: path.join(__dirname, 'server/public'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode == true ? 'style-loader':MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'branding/styles/bundle.css'
        })
    ],

    devtool: 'source-map'

};