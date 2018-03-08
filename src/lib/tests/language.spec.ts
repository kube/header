
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { getLanguageFromFilename } from '../language'

it('matches JavaScript file', () => {
  const languageInfo = getLanguageFromFilename(
    '/someFolder/hello.js'
  )!
  expect(languageInfo.name).toBe('JavaScript')
  expect(languageInfo.type).toBe('javascript')
})

it('matches C files', () => {
  const languageInfo = getLanguageFromFilename(
    '/someFolder/hello.c'
  )!
  expect(languageInfo.name).toBe('C')
  expect(languageInfo.type).toBe('c')
})

it('matches TypeScript files', () => {
  const languageInfo = getLanguageFromFilename(
    '/someFolder/hello.ts'
  )!
  expect(languageInfo.name).toBe('TypeScript')
  expect(languageInfo.type).toBe('typescript')
})
