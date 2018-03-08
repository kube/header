
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { readFile, writeFile } from './fs'
import * as program from 'commander'
import {
  formatHeader,
  getLanguageFromFilename
} from '../lib'

const { version } = require('../../package.json')

program
  .version(version, '-v, --version')
  .command('format <files...>')
  .option('-w, --write', 'Write file in place')
  .action(async (files, options) => {
    for (const file of files) {
      const content = await readFile(file, 'utf-8')
      const detectedLanguage = getLanguageFromFilename(file)

      if (detectedLanguage) {
        const formattedContent = formatHeader(
          content,
          detectedLanguage.type
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
