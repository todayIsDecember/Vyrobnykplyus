const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    app: './js/app.js',
  },
  context: path.resolve(__dirname, 'src'),
  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './style.css' }),
    new HtmlWebpackPlugin({ template: 'index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './product-category.html', filename: 'product-category.html' }),
    new HtmlWebpackPlugin({ template: './bagel.html', filename: 'bagel.html' }),
    new HtmlWebpackPlugin({ template: './biscuit.html', filename: 'biscuit.html' }),
    new HtmlWebpackPlugin({ template: './butter.html', filename: 'butter.html' }),
    new HtmlWebpackPlugin({ template: './cake.html', filename: 'cake.html' }),
    new HtmlWebpackPlugin({ template: './candies.html', filename: 'candies.html' }),
    new HtmlWebpackPlugin({ template: './corn.html', filename: 'corn.html' }),
    new HtmlWebpackPlugin({ template: './cornStick.html', filename: 'cornStick.html' }),
    new HtmlWebpackPlugin({ template: './cupcake.html', filename: 'cupcake.html' }),
    new HtmlWebpackPlugin({ template: './custard.html', filename: 'custard.html' }),
    new HtmlWebpackPlugin({ template: './gingerbread.html', filename: 'gingerbread.html' }),
    new HtmlWebpackPlugin({ template: './oatmeal.html', filename: 'oatmeal.html' }),
    new HtmlWebpackPlugin({ template: './shortbread.html', filename: 'shortbread.html' }),
    new HtmlWebpackPlugin({ template: './sugar.html', filename: 'sugar.html' }),
    new HtmlWebpackPlugin({ template: './sweet.html', filename: 'sweet.html' }),
    new HtmlWebpackPlugin({ template: './wheat.html', filename: 'wheat.html' }),
    new HtmlWebpackPlugin({ template: './history.html', filename: 'history.html' }),
    new HtmlWebpackPlugin({ template: './about.html', filename: 'about.html' }),
    new HtmlWebpackPlugin({ template: './contactUs.html', filename: 'contactUs.html' }),
    new HtmlWebpackPlugin({ template: './news.html', filename: 'news.html' }),
    new HtmlWebpackPlugin({ template: './diet.html', filename: 'diet.html' }),
  ],
  stats: {
    children: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  mode: 'development',
};