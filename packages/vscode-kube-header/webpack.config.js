
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')

const PROJECT_ROOT = __dirname

/**
 * e@type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  devtool: 'source-map',
  entry: join(PROJECT_ROOT, 'src/extension'),
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: {
    vscode: 'commonjs vscode',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: join(PROJECT_ROOT, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
}
