
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { LANGUAGES } from './data'

/**
 * Get LanguageInfo given a filename.
 * If file is not a supported language, `undefined` will
 * be returned.
 */
export const getLanguageFromFilename = (path: string) =>
  LANGUAGES.find(language => language.test.test(path))
