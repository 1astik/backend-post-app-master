'use strict';

const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
    context: `${ path.resolve( __dirname ) }/src`,
    entry: {
        app: `./App`
    },
    output: {
        path: `${ path.resolve( __dirname ) }/public`,
        filename: `App.js`,
        // publicPath: `./public`
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.pug$/i,
                use: [ 'html-loader', 'pug-html-loader?pretty' ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin( {
            template: `${ path.resolve( __dirname ) }/src/main.pug`,
            filename: "index.html",
            title: "back-post-app"
        } ),
        new MiniCssExtractPlugin( {
            filename: `[name].css`,
            chunkFilename: '[id].css',
            ignoreOrder: false
        } )
    ],
    devServer: {
        overlay: true,
        hot: true,
        // liveReload: true,
        contentBase: `${ path.resolve( __dirname ) }/public`
    },
    // watch: true


};
