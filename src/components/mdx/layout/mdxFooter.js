// components
import Link from "next/link";


const MDXFooter = ({ previousCrumb, nextCrumb }) => {
    return (
        <div className="mt-6 flex border-t border-tertiary-200 dark:border-tertiary-700 pt-6 pb-8 items-center gap-2 justify-between">
            {/* previous */}
            {previousCrumb ? (
                <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500 font-medium mb-1">Previous</p>
                    <Link
                        href={`${previousCrumb.href}`}
                        className="text-primary-500 font-medium capitalize transition-all hover:text-primary-600">
                        {previousCrumb.name}
                    </Link>
                </div>
            ) : (
                <div />
            )}
            {/* next */}
            {nextCrumb ? (
                <div className="flex flex-col items-end">
                    <p className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500 font-medium mb-1">Next</p>
                    <Link
                        href={`${nextCrumb.href}`}
                        className="text-primary-500 font-medium capitalize transition-all hover:text-primary-600">
                        {nextCrumb.name}
                    </Link>
                </div>
            ) : (
                <div />
            )}
        </div>
    )
}

export default MDXFooter