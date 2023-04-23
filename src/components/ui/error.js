// base
import { AiOutlineExclamationCircle } from "react-icons/ai";

// utils
import mergeClasses from "@/utils/helpers/mergeClasses";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const Error = ({
  icon = true,
  title = "Error",
  message = "Something went wrong!",
  size = "default",
}) => {
  // styling
  let baseErrorStyles = cva(["flex", "items-start", "gap-1", "text-red-500", "transition-all"], {
    variants: {
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  });

  return (
    <div className={mergeClasses(baseErrorStyles({ size }))}>
      {icon && (
        <AiOutlineExclamationCircle
          className={clsx("flex-shrink-0", size === "sm" ? "mt-1" : "mt-[5px]")}
        />
      )}
      <p>
        <span className="font-medium">{title && `${title}: `}</span>
        {message}
      </p>
    </div>
  );
};

export default Error;
