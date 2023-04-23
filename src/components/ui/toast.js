// utils
import { cva } from "class-variance-authority";
import mergeClasses from "@/utils/helpers/mergeClasses";
import { motion } from "framer-motion";

export const baseToastTitleStyles = cva([], {
  variants: {},
  defaultVariants: {},
});

const Toast = ({ toast }) => {
  // destructure toast
  let { id, message, type, title } = toast;

  // styling
  let baseToastTitleStyles = cva(["font-medium"], {
    variants: {
      type: {
        default: "text-tertiary-500",
        success: "text-green-500",
        error: "text-rose-500",
        warning: "text-orange-500",
        loading: "text-sky-500",
      },
    },
    defaultVariants: {
      type: "default",
    },
  });

  let baseToastBarStyles = cva(["h-auto", "w-0.5", "rounded-md"], {
    variants: {
      type: {
        default: "bg-tertiary-500",
        success: "bg-green-500",
        error: "bg-rose-500",
        warning: "bg-orange-500",
        loading: "bg-sky-500",
      },
    },
    defaultVariants: {
      type: "default",
    },
  });

  return (
    <motion.div
      key={`toast-${id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex h-auto rounded-md border border-tertiary-200 bg-tertiary-50 px-3 py-2 shadow dark:border-tertiary-700 dark:bg-tertiary-950"
    >
      <div className={mergeClasses(baseToastBarStyles({ type }))} />
      <div className="flex flex-col px-3">
        {title && (
          <p className={mergeClasses(baseToastTitleStyles({ type }))}>
            {title}
          </p>
        )}
        {message && (
          <p className="text-sm text-tertiary-500 dark:text-tertiary-300">
            {message}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Toast;
