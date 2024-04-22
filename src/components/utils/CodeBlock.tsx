// This is to display code block with syntax highlighting
// @ts-ignore
import { CopyBlock, dracula } from "react-code-block";

const CodeBlocks = ({ code, language }: { code: string; language: "js" }) => {
  return (
    <CopyBlock
      customStyle={{
        maxHeight: "400px",
        overflow: "scroll",
        textAlign: "left",
      }}
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
      codeBlock
      wrapLines
    />
  );
};

export default CodeBlocks;
