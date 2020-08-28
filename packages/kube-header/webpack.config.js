
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
  mode: 'production',
  target: 'node',
  entry: {
    cli: join(PROJECT_ROOT, 'src/cli'),
    lib: join(PROJECT_ROOT, 'src/lib')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader']
      }
    ]
  },
  output: {
    path: join(PROJECT_ROOT, 'dist')
  }
}
