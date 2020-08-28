
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const headers = {
  hash: `
      #########.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##."

`,
  slash: `
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

`,
  semicolon: `
      ;;;;;;;;;.
     ;;;;;;;;',;:
   ;;;;;;;;;',;;".
  ;;';;';; .;;',;;.
   ;; ;; ;; ; ;;",;.
    ;; ;; ;; ;; ;;'
     ;; ;; ;; :;;
      ;; ;; ;;.'

`,
  parens: `
      (*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*)

`,
  dash: `
      --------,
     -------- --
   --------- -- -,
  -- -- -- .-- ---.
   -- -- -- - -- --.
    -- -- -- -- --'
     -- -- -- .--
      -- -- ---'

`,
  percent: `
      %%%%%%%%%.
     %%%%%%%%",%:
   %%%%%%%%%',%%".
  %%'%%'%% .%%',%%.
   %% %% %% % %%",%.
    %% %% %% %% %%'
     %% %% %% :%%
      %% %% %%."

`,
}

const languageHeaders = {
  c: headers.slash,
  coffeescript: headers.hash,
  cpp: headers.slash,
  css: headers.slash,
  dockerfile: headers.hash,
  elm: headers.dash,
  erlang: headers.percent,
  fsharp: headers.parens,
  go: headers.slash,
  groovy: headers.slash,
  haskell: headers.dash,
  ini: headers.semicolon,
  jade: headers.slash,
  java: headers.slash,
  javascript: headers.slash,
  javascriptreact: headers.slash,
  latex: headers.percent,
  less: headers.slash,
  lua: headers.semicolon,
  makefile: headers.hash,
  matlab: headers.percent,
  'objective-c': headers.slash,
  ocaml: headers.parens,
  perl: headers.hash,
  perl6: headers.hash,
  php: headers.slash,
  plaintext: headers.hash,
  powershell: headers.hash,
  python: headers.hash,
  r: headers.hash,
  ruby: headers.hash,
  rust: headers.slash,
  scss: headers.slash,
  shellscript: headers.hash,
  sql: headers.hash,
  swift: headers.slash,
  typescript: headers.slash,
  typescriptreact: headers.slash,
  xsl: headers.slash,
  yaml: headers.hash,
}

export type SupportedLanguage = keyof typeof languageHeaders

export const supportedLanguages = Object.keys(
  languageHeaders
) as SupportedLanguage[]

/**
 * Check if language is supported
 */
export const isSupportedLanguage = (
  lang: string
): lang is SupportedLanguage => lang in languageHeaders

/**
 * Get header corresponding to languageId
 */
export const getHeader = (language: SupportedLanguage) =>
  languageHeaders[language]

/**
 * Regex to verify that current text begins by a header
 * Matches all kinds of header even if broken by code-formatter
 */
const headerRegex = /^(\s*\n)?\s*(\/\*|\(\*|#|%|-|;)([#%;"'.,:;/`\- ]*\n){7}[#%;"'.,:;/`\- ]*(\*\/|\*\))?\s*\n/

/**
 * Get current header in text if already present
 * Matches all kinds of header even if broken by code-formatter
 */
export const extractHeader = (text: string) => {
  const regexMatches = text.match(headerRegex)
  return regexMatches ? regexMatches[0] : undefined
}
