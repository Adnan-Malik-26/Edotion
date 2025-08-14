"use client";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";

import {
  useCreateBlockNote,
} from "@blocknote/react"

import { BlockNoteView } from "@blocknote/shadcn";

import "@blocknote/core/style.css";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean,
};

const Editor = ({
  onChange,
  initialContent,
  editable = true,
}: EditorProps) => {
  const { edgestore } = useEdgeStore();
  const { resolvedTheme } = useTheme();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    uploadFile: handleUpload
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={(editor) => {
          onChange(JSON.stringify(editor.document, null, 2));
        }}
        editable={editable}
      />
    </div>
  )
}

export default Editor;
