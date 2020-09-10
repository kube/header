
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as program from 'commander'
import * as fastglob from 'fast-glob'
import {
  formatHeader,
  getLanguageFromFilename,
} from '../lib'
import { readFile, writeFile } from './fs'

const { version } = require('../../package.json')

program
  .version(version, '-v, --version')
  .command('format <files...>')
  .option('-w, --write', 'Write file in place')
  .option('-a, --add', 'Add header if not present')
  .action(async (fileGlobs: string[], options) => {
    // Expand file globs
    const files = await Promise.all(
      fileGlobs.map(_ => fastglob(_))
    ).then(_ => _.flat())

    for (const file of files) {
      const content = await readFile(file, 'utf-8')
      const detectedLanguage = getLanguageFromFilename(file)

      if (detectedLanguage) {
        const formattedContent = formatHeader(
          content,
          detectedLanguage.type,
          options.add
        )
        if (options.write === true) {
          await writeFile(file, formattedContent)
        } else {
          console.log(formattedContent)
        }
      } else {
        console.error('Unsupported file extension')
      }
    }
  })

program.parse(process.argv)
