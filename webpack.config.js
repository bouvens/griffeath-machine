const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
    filename: '[name].bundle.js',
    globalObject: 'this',
    assetModuleFilename: 'images/[name].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: (isProduction ? [new CleanWebpackPlugin()] : [])
    .concat([
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: path.join(__dirname, 'img/favicon.png'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]),
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /^gpu-utils\.bundle\.js$/,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
