
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { LANGUAGES } from '../data'

/**
 * Get LanguageInfo given a filename.
 * If file is not a supported language, `undefined` will
 * be returned.
 */
export const getLanguageFromFilename = (path: string) => {
  for (const language of LANGUAGES) {
    if (language.test.test(path)) {
      return language
    }
  }
  return undefined
}
