
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')
const DefinitionBundlePlugin = require('dts-bundle-webpack')

const PROJECT_ROOT = __dirname
const SOURCES_ROOT = join(PROJECT_ROOT, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'dist')

/**
 * e@type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  entry: {
    cli: join(SOURCES_ROOT, 'cli'),
    lib: join(SOURCES_ROOT, 'lib'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader'],
      },
    ],
  },
  output: {
    path: BUILD_FOLDER,
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  plugins: [
    new DefinitionBundlePlugin({
      name: 'kube-header',
      removeSource: true,
      main: join(BUILD_FOLDER, 'lib/index.d.ts'),
      out: join(BUILD_FOLDER, 'lib.d.ts'),
    }),
  ],
}
