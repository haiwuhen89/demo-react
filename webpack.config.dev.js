var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var configCommon = require('./webpack.config');


var config = _.extend({}, configCommon, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev'),
                'DEBUG': true,
                'DEVELOP': true
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    compact: false
                },
                include: path.join(__dirname, 'src')
            },
            // LESS
            {
                test: /\.less$/, 
                loader: 'style-loader!css-loader!less-loader'
            },
            // CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "ie 8", "ie 9", "> 1%"]}')
            },
            // IMAGE
            {
                test: /.(gif|jpg|png)$/,
                loader: 'file?name=img-[hash].[ext]'
            },
            // FONT
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }
        ]
    }
});

module.exports = config;
