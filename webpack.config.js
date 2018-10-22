var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    './src/index.js'
  ], // 入口文件，单入口 app.jsx 文件
  output: { 
    path: path.join(__dirname, 'dist'), 
    filename: 'bundle.js' 
  }, // 编译到的文件
  module: {
    loaders: [ // 使用特定的加载器 loader 处理特定的文件
      // {
      //   test: /.js?$/, // 文件过滤规则
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      //   query: {
      //     presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
      //   },
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
            compact: false
        },
        include: path.join(__dirname, 'src')
      },
      { 
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader' 
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
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
    ],
  },
  plugins: [
      // new webpack.NoEmitOnErrorsPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
      }),
      new HtmlWebpackPlugin({
        title: 'T11',
        favicon:'',
        hash: false,
        inject: false,
        appMountId: 'app',
        filename: 'index.html',
        template: path.join( __dirname,'/index.html'),
      }),
  ],
};