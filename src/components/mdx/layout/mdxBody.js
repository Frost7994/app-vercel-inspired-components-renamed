const MDXBody = ({ children }) => {
  return (
    // prose-pre:dark:!bg-tertiary-900 prose-code:dark:bg-tertiary-900 prose-pre:!bg-tertiary-900 prose-code:bg-tertiary-900 prose-code:text-tertiary-300
    <div
      className="
        prose-md 
        prose-code:hljs 
        prose 
        mt-4
        flex 
        w-full 
        max-w-none 
        flex-col 
        dark:prose-invert 
        prose-h1:mb-0 
        prose-h2:mb-2 
        prose-h2:mt-8 
        prose-p:mt-2 
        prose-blockquote:border-primary-500
        prose-ul:mt-0
        prose-th:pr-8
        prose-td:pr-8
        "
    >
      {children}
    </div>
  );
};

export default MDXBody;
