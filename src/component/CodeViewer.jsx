import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

const CodeViewer = ({codeString,language}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <CopyToClipboard text={codeString} onCopy={handleCopy}>
        <button>{copied ? 'Copied!' : 'Copy code'}</button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;