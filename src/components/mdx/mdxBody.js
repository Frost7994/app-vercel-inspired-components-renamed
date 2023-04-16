const MDXBody = ({ children }) => {
    return (
        // prose-pre:dark:!bg-tertiary-900 prose-code:dark:bg-tertiary-900 prose-pre:!bg-tertiary-900 prose-code:bg-tertiary-900 prose-code:text-tertiary-300
        <div className="prose prose-code:hljs flex flex-col w-full prose-blockquote:border-secondary-500 max-w-none prose-md prose-p:mt-2 mt-4 dark:prose-invert prose-h1:mt-8 prose-h1:mb-0 prose-h2:mt-8 prose-h2:mb-2">
            {children}
        </div>

    )
}

export default MDXBody