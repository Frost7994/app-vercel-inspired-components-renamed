const MDXBody = ({ children }) => {
    return (
        // prose-pre:dark:!bg-tertiary-900 prose-code:dark:bg-tertiary-900 prose-pre:!bg-tertiary-900 prose-code:bg-tertiary-900 prose-code:text-tertiary-300
        <div className="
        flex 
        flex-col 
        mt-4 
        max-w-none
        w-full 
        prose 
        prose-md 
        prose-code:hljs 
        prose-blockquote:border-primary-500 
        prose-p:mt-2 
        dark:prose-invert 
        prose-h1:mb-0 
        prose-h2:mt-8 
        prose-h2:mb-2
        prose-th:pr-8
        prose-td:pr-8
        prose-ul:mt-0
        ">
            {children}
        </div>

    )
}

export default MDXBody