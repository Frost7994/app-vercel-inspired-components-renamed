const MDXHeader = ({ data }) => {

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex flex-col truncate">
                <p className="truncate text-xs sm:text-sm text-tertiary-400 dark:text-tertiary-500">
                    <span className="font-medium text-sm sm:text-base text-primary-500">{data.tag}</span>
                    <span className="mx-1 md:mx-2">•</span>
                    <span>{data.readingTime}</span>
                    <span className="mx-1 md:mx-2">•</span>
                    <span className="mr-1 hidden md:inline-block">Last updated on</span>
                    <span>{data.date}</span>
                </p>
                <h1 className="text-3xl sm:text-3xl md:text-4xl mb-2 font-bold">{data.title}</h1>
            </div>
        </div>
    )
}

export default MDXHeader