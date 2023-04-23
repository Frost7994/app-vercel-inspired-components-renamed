// components
import Link from "next/link";

const MDXFooter = ({ previousCrumb, nextCrumb }) => {
  return (
    <div className="mt-6 flex items-center justify-between gap-2 border-t border-tertiary-200 pb-8 pt-6 dark:border-tertiary-700">
      {/* previous */}
      {previousCrumb ? (
        <div className="flex flex-col items-start">
          <p className="mb-1 text-xs font-medium text-tertiary-400 dark:text-tertiary-500 sm:text-sm md:text-base">
            Previous
          </p>
          <Link
            href={`${previousCrumb.href}`}
            className="font-medium capitalize text-primary-500 transition-all hover:text-primary-600"
          >
            {previousCrumb.name}
          </Link>
        </div>
      ) : (
        <div />
      )}
      {/* next */}
      {nextCrumb ? (
        <div className="flex flex-col items-end">
          <p className="mb-1 text-xs font-medium text-tertiary-400 dark:text-tertiary-500 sm:text-sm md:text-base">
            Next
          </p>
          <Link
            href={`${nextCrumb.href}`}
            className="font-medium capitalize text-primary-500 transition-all hover:text-primary-600"
          >
            {nextCrumb.name}
          </Link>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default MDXFooter;
