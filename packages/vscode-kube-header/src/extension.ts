
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import * as vscode from 'vscode'
import {
  Position,
  Range,
  TextEdit,
  WorkspaceEdit,
} from 'vscode'
import {
  extractHeader,
  getHeader,
  isSupportedLanguage,
  SupportedLanguage,
} from './header'

/**
 * Returns the number of lines of a header.
 * Header height can vary if code formatter removed first line
 */
const getHeaderHeight = (header: string) =>
  header.split('\n').length - 1

/**
 * Insert a new header at top of document
 */
const insertHeader = (language: SupportedLanguage) =>
  TextEdit.insert(new Position(0, 0), getHeader(language))

/**
 * Update header in document in case broken by code formatter
 */
const replaceHeader = (
  currentHeader: string,
  language: SupportedLanguage
) =>
  TextEdit.replace(
    new Range(0, 0, getHeaderHeight(currentHeader), 0),
    getHeader(language)
  )

/**
 * Helper to apply TextEdits to Document
 */
const applyTextEdits = (
  document: vscode.TextDocument,
  textEdits: TextEdit[]
) => {
  const workspaceEdit = new WorkspaceEdit()
  workspaceEdit.set(document.uri, textEdits)
  vscode.workspace.applyEdit(workspaceEdit)
}

/**
 * Returns TextEdits to perform to insert an header
 */
const insertDocumentHeader = (
  document: vscode.TextDocument
) => {
  const currentHeader = extractHeader(document.getText())

  return !currentHeader &&
    isSupportedLanguage(document.languageId)
    ? [insertHeader(document.languageId)]
    : updateDocumentHeader(document)
}

/**
 * Returns TextEdits to perform to fix a potential header
 */
const updateDocumentHeader = (
  document: vscode.TextDocument
) => {
  if (!isSupportedLanguage(document.languageId)) {
    return []
  }

  const currentHeader = extractHeader(document.getText())

  return currentHeader
    ? [replaceHeader(currentHeader, document.languageId)]
    : []
}

/**
 * Called by VSCode on extension activation.
 * Registers header insertion command and formatting provider.
 */
export const activate = (
  context: vscode.ExtensionContext
) => {
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(
      'kube.insertHeader',
      (editor) =>
        applyTextEdits(
          editor.document,
          insertDocumentHeader(editor.document)
        )
    ),

    vscode.workspace.onWillSaveTextDocument((event) =>
      event.waitUntil(
        Promise.resolve(
          updateDocumentHeader(event.document)
        )
      )
    )
  )
}
