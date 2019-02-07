require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const Dotenv = require('dotenv-webpack');


var serverConfig = {
    entry: ['./src/server/index.js'],
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname),
      filename: "server.js",
      libraryTarget:"commonjs2"
    },
    devtool: false,
    module: {
      rules: [
        {
            test:[/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
            loader:"file-loader",
            options:{
                name:"build/media/[name].[ext]",
                publicPath:url => url.replace('/build',"")
                ,emit:false
            }
        },
        {
            test : /\.(eot|otf|woff|woff2|ttf)(\?\S*)?$/,
            loader: 'url-loader',
        },
        {
          test:/\.css$/,
          use:[
              {
                  loader:"postcss-loader",
                  options:{sourceMap:true,ident:'postcss',plugins:[require('autoprefixer')()]}
              }
          ]
        },
        {   
            test: /\.(js|jsx)$/,
            exclude:/(node_modules)/,
            use: 'babel-loader' 
        }
      ]
    },
    plugins: [ 
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      }),
      new CleanWebpackPlugin('*.server.js'),
      new Dotenv()
    ]
  }

  module.exports = [serverConfig]