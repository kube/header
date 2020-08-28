
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { LANGUAGE_HEADER, SupportedLanguage } from '../data'
import { extractShebang } from './shebang'

/**
 * Regex to verify that current text begins by a header.
 * Matches all kinds of header even if broken by code-formatter
 */
const HEADER_REGEX = /^(\s*\n)?\s*(\/\*|\(\*|#|%|-|;)([#%;"'.,:;/`\- ]*\n){7}[#%;"'.,:;/`\- ]*(\*\/|\*\))?\s*\n/

/**
 * Check if language is supported
 */
export const isSupportedLanguage = (
  lang: string
): lang is SupportedLanguage => lang in LANGUAGE_HEADER

/**
 * Get header corresponding to languageId
 */
export const getHeader = (language: SupportedLanguage) =>
  LANGUAGE_HEADER[language]

/**
 * Get current header in text if already present.
 * Matches all kinds of header even if broken by code-formatter
 */
export const extractHeader = (code: string) => {
  const matches = code.match(HEADER_REGEX)
  return matches ? matches[0] : null
}

/**
 * Replace a bad-formatted header in a file given a language
 */
export const formatHeader = (
  rawCode: string,
  language: SupportedLanguage,
  addIfNotPresent?: boolean
) => {
  const [shebang, code] = extractShebang(rawCode)

  const currentHeader = extractHeader(code)

  if (currentHeader) {
    return (
      shebang +
      code.replace(HEADER_REGEX, getHeader(language))
    )
  } else if (addIfNotPresent) {
    return shebang + getHeader(language) + code
  } else {
    return rawCode
  }
}
