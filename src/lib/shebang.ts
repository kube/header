
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const SHEBANG_REGEX = /^#!.*\n/

/**
 * Extract shebang if present in code.
 * Return tuple with shebang and extracted code.
 * Shebang will be empty string if none present.
 */
export const extractShebang = (
  code: string
): [string, string] => {
  const matches = code.match(SHEBANG_REGEX)
  const shebang = matches ? matches[0] : ''

  return [shebang, code.slice(shebang.length)]
}
