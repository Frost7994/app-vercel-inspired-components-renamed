// base
import { FaGithubAlt } from "react-icons/fa";

// components
import Link from "next/link";

const GithubButton = ({ repo }) => {
  return (
    <Link
      href={`https://github.com/Frost7994/app-vercel-inspired-components/blob/main/src${repo}`}
      className="group flex w-fit overflow-hidden rounded-md border border-tertiary-200 no-underline transition-all hover:border-tertiary-300 hover:bg-tertiary-300/25 dark:border-tertiary-700 hover:dark:border-tertiary-600 hover:dark:bg-tertiary-600/25"
    >
      <div className="aspect-square bg-tertiary-200 p-2 transition-all group-hover:bg-tertiary-300 dark:bg-tertiary-700 group-hover:dark:bg-tertiary-600">
        <FaGithubAlt className="flex-shrink-0" />
      </div>
      <span className="mx-2">source</span>
    </Link>
  );
};

export default GithubButton;
