// components
import Link from "next/link";

// utils
import { baseButtonStyles } from "@/components/ui/button";
import mergeClasses from "@/utils/helpers/mergeClasses";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center p-8">
      <div className="flex flex-col gap-4">
        {/* logo */}
        <div className="flex flex-wrap gap-4">
          <div className="flex aspect-square flex-shrink-0 items-center justify-center rounded-md border-4 p-3">
            <p className="text-5xl">AU</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl">
              Apex<span className="text-primary-500">UI</span>
            </h1>
            <p className="whitespace-normal text-xl">
              A React UI library for building modern web apps
            </p>
          </div>
        </div>
        <Link
          className={mergeClasses(baseButtonStyles(), "text-center")}
          href="/documentation/overview/introduction"
        >
          Go To Documentation
        </Link>
      </div>
    </div>
  );
};

export default Home;
