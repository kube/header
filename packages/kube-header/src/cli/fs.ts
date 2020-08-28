
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import {
  readFile as readFileAsync,
  writeFile as writeFileAsync
} from 'fs'
import { promisify } from 'util'

export const readFile = promisify(readFileAsync)
export const writeFile = promisify(writeFileAsync)
