import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeRendererProps {
  language: string;
  value: string;
}

const CodeRenderer: React.FC<CodeRendererProps> = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default CodeRenderer;
