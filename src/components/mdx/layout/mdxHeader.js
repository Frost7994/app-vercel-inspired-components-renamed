const MDXHeader = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="flex flex-col truncate">
        <p className="truncate text-xs text-tertiary-400 dark:text-tertiary-500 sm:text-sm">
          <span className="text-sm font-medium text-primary-500 sm:text-base">
            {data.tag}
          </span>
          <span className="mx-1 md:mx-2">•</span>
          <span>{data.readingTime}</span>
          <span className="mx-1 md:mx-2">•</span>
          <span className="mr-1 hidden md:inline-block">Last updated on</span>
          <span>{data.date}</span>
        </p>
        <h1 className="mb-2 text-3xl font-bold sm:text-3xl md:text-4xl">
          {data.title}
        </h1>
      </div>
    </div>
  );
};

export default MDXHeader;
