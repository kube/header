
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Remove left margin on multiline templated text.
 */
export const paddedText = ([text]: TemplateStringsArray) =>
  text
    .replace(/^\n/, '')
    .replace(/\n\s+$/, '')
    .replace(/^\s+\|/gm, '')
