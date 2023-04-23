// utils
import clsx from "clsx";

const TableProp = ({ children, type }) => {
  return (
    <div
      className={clsx(
        "not-prose w-fit",
        type === "solid"
          ? "rounded-md bg-primary-100 px-2 text-primary-500 dark:bg-primary-800"
          : "font-medium text-primary-500"
      )}
    >
      {children}
    </div>
  );
};

export default TableProp;
