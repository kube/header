
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { HEADER } from './header'

export const LANGUAGE_HEADER = {
  c: HEADER.slash,
  coffeescript: HEADER.hash,
  cpp: HEADER.slash,
  css: HEADER.slash,
  dockerfile: HEADER.hash,
  elm: HEADER.dash,
  erlang: HEADER.percent,
  fsharp: HEADER.parens,
  go: HEADER.slash,
  groovy: HEADER.slash,
  haskell: HEADER.dash,
  ini: HEADER.semicolon,
  jade: HEADER.slash,
  java: HEADER.slash,
  javascript: HEADER.slash,
  javascriptreact: HEADER.slash,
  latex: HEADER.percent,
  less: HEADER.slash,
  lua: HEADER.semicolon,
  makefile: HEADER.hash,
  matlab: HEADER.percent,
  'objective-c': HEADER.slash,
  ocaml: HEADER.parens,
  perl: HEADER.hash,
  perl6: HEADER.hash,
  php: HEADER.slash,
  plaintext: HEADER.hash,
  powershell: HEADER.hash,
  python: HEADER.hash,
  r: HEADER.hash,
  ruby: HEADER.hash,
  rust: HEADER.slash,
  scss: HEADER.slash,
  shellscript: HEADER.hash,
  sql: HEADER.hash,
  swift: HEADER.slash,
  typescript: HEADER.slash,
  typescriptreact: HEADER.slash,
  xsl: HEADER.slash,
  yaml: HEADER.hash
}

export type SupportedLanguage = keyof typeof LANGUAGE_HEADER

export const SUPPORTED_LANGUAGES = Object.keys(
  LANGUAGE_HEADER
) as SupportedLanguage[]

export type LanguageInfo = {
  name: string
  type: SupportedLanguage
  test: RegExp
}

export const LANGUAGES: LanguageInfo[] = [
  {
    name: 'C',
    type: 'c',
    test: /\.(c|h)$/
  },
  {
    name: 'C++',
    type: 'cpp',
    test: /\.(cxx|CXX|cpp|CPP|cc|C|h|H)/
  },
  {
    name: 'CoffeeScript',
    type: 'coffeescript',
    test: /\.coffee$/
  },
  {
    name: 'CSS',
    type: 'css',
    test: /\.css$/
  },
  {
    name: 'Dockerfile',
    type: 'dockerfile',
    test: /^Dockerfile$/
  },
  {
    name: 'Elm',
    type: 'elm',
    test: /\.elm$/
  },
  {
    name: 'Erlang',
    type: 'erlang',
    test: /\.erl$/
  },
  {
    name: 'F#',
    type: 'fsharp',
    test: /\.(fs|fsi|ml|mli|fsx|fsscript)$/
  },
  {
    name: 'Go',
    type: 'go',
    test: /\.go$/
  },
  {
    name: 'Groovy',
    type: 'groovy',
    test: /\.(groovy|gvy|gy|gsh)$/
  },
  {
    name: 'Haskell',
    type: 'haskell',
    test: /\.(hs|lhs)$/
  },
  {
    name: 'Windows Config File',
    type: 'ini',
    test: /\.ini$/
  },
  {
    name: 'Jade Template',
    type: 'jade',
    test: /\.(jade|pug)$/
  },
  {
    name: 'Java',
    type: 'java',
    test: /\.(java|class)$/
  },
  {
    name: 'JavaScript',
    type: 'javascript',
    test: /\.js$/
  },
  {
    name: 'JSX',
    type: 'javascriptreact',
    test: /\.jsx$/
  },
  {
    name: 'LaTeX',
    type: 'latex',
    test: /\.tex$/
  },
  {
    name: 'Less',
    type: 'less',
    test: /\.less$/
  },
  {
    name: 'Lua',
    type: 'lua',
    test: /\.lua$/
  },
  {
    name: 'Makefile',
    type: 'makefile',
    test: /^Makefile$/
  },
  {
    name: 'MatLab',
    type: 'matlab',
    test: /\.(fig|m|mlx)$/
  },
  {
    name: 'Objective C',
    type: 'objective-c',
    test: /\.m$/
  },
  {
    name: 'OCaml',
    type: 'ocaml',
    test: /\.ml$/
  },
  {
    name: 'Perl',
    type: 'perl',
    test: /\.p(l|m)$/
  },
  {
    name: 'Perl6',
    type: 'perl6',
    test: /\.p(l|m)?6$/
  },
  {
    name: 'PHP',
    type: 'php',
    test: /\.php(4-5)?$/
  },
  {
    name: 'PowerShell',
    type: 'powershell',
    test: /\.ps1$/
  },
  {
    name: 'Python',
    type: 'python',
    test: /\.py$/
  },
  {
    name: 'R',
    type: 'r',
    test: /\.r$/
  },
  {
    name: 'Ruby',
    type: 'ruby',
    test: /\.rb$/
  },
  {
    name: 'Rust',
    type: 'rust',
    test: /\.rs$/
  },
  {
    name: 'Scss',
    type: 'scss',
    test: /\.scss$/
  },
  {
    name: 'ShellScript',
    type: 'shellscript',
    test: /\.sh$/
  },
  {
    name: 'SQL',
    type: 'sql',
    test: /\.sql$/
  },
  {
    name: 'Swift',
    type: 'swift',
    test: /\.swift$/
  },
  {
    name: 'TypeScript',
    type: 'typescript',
    test: /\.ts$/
  },
  {
    name: 'TypeScript TSX',
    type: 'typescriptreact',
    test: /\.tsx$/
  },
  {
    name: 'XSL',
    type: 'xsl',
    test: /\.xsl$/
  },
  {
    name: 'Yaml',
    type: 'yaml',
    test: /\.yml$/
  }
]
