
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { formatHeader } from '../header'
import { getLanguageFromFilename } from '../language'
import { paddedText } from '../utils'

const testFormat = (input: string) =>
  formatHeader(
    input,
    getLanguageFromFilename('folder/file.ts')!.type
  )

it('formats header', () =>
  expect(
    testFormat(paddedText`
      |/*#######.
      |########",#:
      |#########',##".
      |##'##'## .##',##.
      |## ## ## # ##",#.
      |## ## ## ## ##'
      |## ## ## :##
      |## ## ##*/
      |const a = 42
      |console.log('HELLO')
    `)
  ).toBe(
    paddedText`
      |
      |      /*#######.
      |     ########",#:
      |   #########',##".
      |  ##'##'## .##',##.
      |   ## ## ## # ##",#.
      |    ## ## ## ## ##'
      |     ## ## ## :##
      |      ## ## ##*/
      |
      |const a = 42
      |console.log('HELLO')
    `
  ))

it('removes unnecessary lines after the header', () =>
  expect(
    testFormat(
      paddedText`
      |/*#######.
      |########",#:
      |#########',##".
      |##'##'## .##',##.
      |## ## ## # ##",#.
      |## ## ## ## ##'
      |## ## ## :##
      |## ## ##*/
      |
      |
      |
      |const a = 42
      |console.log('HELLO')
    `
    )
  ).toBe(
    paddedText`
      |
      |      /*#######.
      |     ########",#:
      |   #########',##".
      |  ##'##'## .##',##.
      |   ## ## ## # ##",#.
      |    ## ## ## ## ##'
      |     ## ## ## :##
      |      ## ## ##*/
      |
      |const a = 42
      |console.log('HELLO')
    `
  ))

it('removes unnecessary lines before the header', () =>
  expect(
    testFormat(
      paddedText`
      |
      |
      |
      |/*#######.
      |########",#:
      |#########',##".
      |##'##'## .##',##.
      |## ## ## # ##",#.
      |## ## ## ## ##'
      |## ## ## :##
      |## ## ##*/
      |const a = 42
      |console.log('HELLO')
    `
    )
  ).toBe(
    paddedText`
      |
      |      /*#######.
      |     ########",#:
      |   #########',##".
      |  ##'##'## .##',##.
      |   ## ## ## # ##",#.
      |    ## ## ## ## ##'
      |     ## ## ## :##
      |      ## ## ##*/
      |
      |const a = 42
      |console.log('HELLO')
    `
  ))

it('handles shebang', () =>
  expect(
    testFormat(
      paddedText`
      |#!/bin/sh
      |/*#######.
      |########",#:
      |#########',##".
      |##'##'## .##',##.
      |## ## ## # ##",#.
      |## ## ## ## ##'
      |## ## ## :##
      |## ## ##*/
      |const a = 42
      |console.log('HELLO')
      `
    )
  ).toBe(
    paddedText`
      |#!/bin/sh
      |
      |      /*#######.
      |     ########",#:
      |   #########',##".
      |  ##'##'## .##',##.
      |   ## ## ## # ##",#.
      |    ## ## ## ## ##'
      |     ## ## ## :##
      |      ## ## ##*/
      |
      |const a = 42
      |console.log('HELLO')
    `
  ))
