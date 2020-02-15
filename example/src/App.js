import React, { Component } from "react";
import htmlData from "./htmlData";
import styleData from "./styleData";

import InteractiveXPathSelector from "react-interactive-inspect";

function App() {
  const [xPath, setXPath] = React.useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>XPathSelector Demo</h1>
        <span className="path">{xPath}</span>
        <div className="container">
          <InteractiveXPathSelector
            html={htmlData}
            css={styleData}
            onSelect={path => setXPath(path)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
