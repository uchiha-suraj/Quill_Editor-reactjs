import React, { useCallback, useEffect, useRef, useState } from 'react';
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
]

function TextEditor() {
  const [quill, setQuill] = useState();

  useEffect(() => {
    const limit = 500;
    if (quill) {
      quill.on('text-change', (e) => {
        quill.formatText(500, 5000, { 
          'bold': true,                  
          'color': 'rgb(220, 20, 60)' 
        });
      }) 
    }
  }, [quill])


  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return

    wrapper.innerHTML = ""
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, { 
      theme: "snow", 
      modules: { toolbar: TOOLBAR_OPTIONS } 
    })

    setQuill(q);
  }, [])


  return (
    <div>
      <div className="container" ref = {wrapperRef} ></div>      
    </div>
  )
}

export default TextEditor