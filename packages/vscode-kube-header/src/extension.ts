
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import {
  extractHeader,
  getHeader,
  isSupportedLanguage,
  SupportedLanguage,
} from 'kube-header'
import * as vscode from 'vscode'
import {
  ExtensionContext,
  Position,
  Range,
  TextDocument,
  TextEdit,
  WorkspaceEdit,
} from 'vscode'

/**
 * Returns the number of lines of a header.
 * Header height can vary if code formatter removed first line
 */
function getHeaderHeight(header: string) {
  return header.split('\n').length - 1
}

/**
 * Insert a new header at top of document
 */
function insertHeader(language: SupportedLanguage) {
  return TextEdit.insert(
    new Position(0, 0),
    getHeader(language)
  )
}

/**
 * Update header in document in case broken by code formatter
 */
function replaceHeader(
  currentHeader: string,
  language: SupportedLanguage
) {
  return TextEdit.replace(
    new Range(0, 0, getHeaderHeight(currentHeader), 0),
    getHeader(language)
  )
}

/**
 * Helper to apply TextEdits to Document
 */
function applyTextEdits(
  document: TextDocument,
  textEdits: TextEdit[]
) {
  const workspaceEdit = new WorkspaceEdit()
  workspaceEdit.set(document.uri, textEdits)
  vscode.workspace.applyEdit(workspaceEdit)
}

/**
 * Returns TextEdits to perform to insert an header
 */
function insertDocumentHeader(document: TextDocument) {
  const currentHeader = extractHeader(document.getText())

  return !currentHeader &&
    isSupportedLanguage(document.languageId)
    ? [insertHeader(document.languageId)]
    : updateDocumentHeader(document)
}

/**
 * Returns TextEdits to perform to fix a potential header
 */
function updateDocumentHeader(document: TextDocument) {
  if (!isSupportedLanguage(document.languageId)) {
    return []
  } else {
    const currentHeader = extractHeader(document.getText())

    return currentHeader
      ? [replaceHeader(currentHeader, document.languageId)]
      : []
  }
}

/**
 * Called by VSCode on extension activation.
 * Registers header insertion command and formatting provider.
 */
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(
      'kube.insertHeader',
      editor =>
        applyTextEdits(
          editor.document,
          insertDocumentHeader(editor.document)
        )
    ),
    vscode.workspace.onWillSaveTextDocument(event =>
      event.waitUntil(
        Promise.resolve(
          updateDocumentHeader(event.document)
        )
      )
    )
  )
}
