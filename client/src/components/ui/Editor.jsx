import React, { useEffect, useRef, useState } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/lucario.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/edit/trailingspace";

// Modes
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/rust/rust";
import "codemirror/mode/xml/xml";
import "codemirror/mode/shell/shell";
import "codemirror/mode/go/go";

const Editor = () => {
  const textareaRef = useRef(null);
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");
  const [etheme, setTheme] = useState("material");

  useEffect(async () => {
    if (!textareaRef.current) return;
    editorRef.current = CodeMirror.fromTextArea(textareaRef.current, {
      mode: language,
      theme: etheme,
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
      matchTags: true,
      matchBrackets: true,
      continuelist: true,
    });
    return () => {
      editorRef.current.toTextArea();
    };
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setSize(null, "95%");
      editorRef.current.setOption("mode", language);
      editorRef.current.setOption("theme", etheme);
    }
  }, [language]);

  return (
    <div className="h-full w-full overflow-hidden p-1">
      <div className="flex w-full justify-between items-center mb-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-2 py-1 bg-gray-800 rounded-lg text-white border"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="go">GO</option>
          <option value="htmlmixed">HTML</option>
          <option value="markdown">Markdown</option>
          <option value="xml">XML</option>
          <option value="shell">Shell</option>
        </select>
        <h1 className="text-white text-xl">CODESPACE</h1>
        <select
          value={etheme}
          onChange={(e) => setTheme(e.target.value)}
          className=" px-2 py-1 bg-gray-800 rounded-lg text-white border"
        >
          <option value="material">Material</option>
          <option value="dracula">Dracula</option>
          <option value="eclipse">Eclipse</option>
          <option value="lucario">Lucario</option>
          <option value="midnight">Midnight</option>
          <option value="neo">NEO</option>
        </select>
      </div>
      <textarea ref={textareaRef} className="rounded-lg" />
    </div>
  );
};

export default Editor;
