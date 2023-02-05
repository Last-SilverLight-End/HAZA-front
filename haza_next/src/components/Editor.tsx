import type { EditorProps as ToastEditorProps } from "@toast-ui/react-editor"
import { Editor as ToastEditor } from "@toast-ui/react-editor"
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all"
import colorSyntax from "@toast-ui/editor-plugin-color-syntax"
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell"


import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/i18n/ko-kr"

import "prismjs/themes/prism.css"
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"

import "tui-color-picker/dist/tui-color-picker.css"
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"

import "@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css"
import React, { RefObject, useRef, forwardRef } from "react"

interface EditorProps {
  initialValue?: string
  previewStyle?: "vertical" | "tab"
  height: string
  initialEditType?: "wysiwyg" | "markdown"
  useCommandShortcut?: boolean
  language?: "ko" | "en"
  editorRef?:RefObject<ToastEditor> // ref로는 못씀
}

/**
 * NHN의 Toast-UI Editor
 * CSR 전용 (Server에서 렌더링 불가능)
 */
export default function Editor(props: EditorProps) {
  return (
    <ToastEditor
      initialValue={props.initialValue ?? ""}
      previewStyle={props.previewStyle ?? "vertical"}
      height={props.height}
      initialEditType={props.initialEditType ?? "markdown"}
      useCommandShortcut={props.useCommandShortcut ?? true}
      language={props.language ?? "ko"}
      plugins={[
        codeSyntaxHighlight,
        colorSyntax,
        tableMergedCell,
      ]}
      ref={props.editorRef}
    />
  )
}