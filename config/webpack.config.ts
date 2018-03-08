
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { join } from 'path'
import { Configuration } from 'webpack'

const PROJECT_ROOT = join(__dirname, '..')

const config: Configuration = {
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

export default config
