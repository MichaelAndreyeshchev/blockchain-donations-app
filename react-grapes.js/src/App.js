import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs"; // a library from drag and drop web page building

import "./styles/main.scss";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, [])

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
