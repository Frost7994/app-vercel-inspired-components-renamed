// state
import { useRef } from "react";

// components
import Switch from "@/components/ui/switch";

// utils
import { useTheme } from "next-themes";
import Router from "next/router";

const Layout = ({ children }) => {
  // destructuring theme and setTheme from useTheme hook
  let { theme, setTheme } = useTheme();

  // ref for scroll to top
  let scrollRef = useRef();

  // fn to scroll to top
  let handleScrollToTop = () => {
    scrollRef?.current?.scrollTo({ top: 0 });
  };

  // scroll to top on route change
  Router.events.on("routeChangeComplete", handleScrollToTop);

  return (
    <div className="flex h-screen w-screen flex-col">
      {/* nav */}
      <div className="flex h-14 w-full items-center justify-between border-b border-tertiary-200 px-4 dark:border-tertiary-700 md:px-8">
        <p className="text-xl font-medium">
          Apex<span className="text-primary-500">UI</span>
        </p>
        <Switch
          values={[
            { name: "light", value: false },
            { name: "dark", value: true },
          ]}
          defaultActive={theme === "dark" ? true : false}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="sm"
        />
      </div>
      {/* body */}
      <div className="flex h-[calc(100%-56px)]">
        {/* main */}
        <div
          ref={scrollRef}
          className="w-full overflow-y-scroll p-8 scrollbar-hide md:p-12"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
