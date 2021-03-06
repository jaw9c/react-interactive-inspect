# react-interactive-inspect

> Inspect element component for React. Current funcionality provides the XPath of the element selected, based for the use case of an standard (non-tech) user to be able to select elements to otherwise process. 

[![NPM](https://img.shields.io/npm/v/react-interactive-inspect.svg)](https://www.npmjs.com/package/react-interactive-inspect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![](banner.gif)

## Demo

https://react-interactive-inspect.netlify.com

## Install

```bash
npm install --save react-interactive-inspect
```

```bash
yarn add react-interactive-inspect
```

## Usage

```tsx
import * as React from "react";

import InteractiveXPathSelector from "react-interactive-inspect";

const htmlData = "<html><ul><li>1</li><li>2</li><li>3</li></ul></html>";
const cssData = "ul { paddingBottom: 10px }";

const Example: React.FC = () => (
  <InteractiveXPathSelector
    html={htmlData}
    css={cssData}
    onSelect={path => console.log(path)}
  />
);
```

## License

MIT © [jaw9c](https://github.com/jaw9c)
