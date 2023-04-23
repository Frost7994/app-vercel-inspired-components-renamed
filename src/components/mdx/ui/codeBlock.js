// base
import { BsClipboard } from "react-icons/bs";

// components
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// utils
import clsx from "clsx";
import { toast } from "react-hot-toast";

// styling
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ title, snippet, fit }) => {
  return (
    <div className="not-prose flex flex-col overflow-hidden rounded-md border border-tertiary-200 dark:border-tertiary-800">
      <div className="flex items-center justify-between gap-4 bg-tertiary-200 p-3 dark:bg-tertiary-800">
        <p className="text-sm font-medium">{title}</p>
        <CopyToClipboard
          text={snippet}
          options={{
            format: "text/plain",
          }}
          onCopy={() => {
            console.log(snippet);
            toast.success("Copied to clipboard");
          }}
        >
          <BsClipboard className="cursor-pointer text-tertiary-950 dark:text-tertiary-50" />
        </CopyToClipboard>
      </div>
      <div
        className={clsx(
          "bg-tertiary-100 dark:bg-tertiary-900",
          fit ? "h-fit" : "max-h-[400px] overflow-y-scroll scrollbar-hide"
        )}
      >
        <SyntaxHighlighter
          language="javascript"
          style={docco}
          customStyle={{
            paddingLeft: "2rem",
            paddingBottom: "2rem",
            backgroundColor: "transparent",
          }}
        >
          {snippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
