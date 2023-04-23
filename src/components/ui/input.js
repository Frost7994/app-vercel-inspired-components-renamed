// utils
import { cva } from "class-variance-authority";
import mergeClasses from "@/utils/helpers/mergeClasses";

const Input = ({
  type = "text",
  placeholder = "Some placeholder here...",
  value = '',
  onChange = () => { },
  size,
  prefix,
  suffix,
  leftIcon,
  rightIcon,
  disabled,
}) => {
  // styling
  let baseInputContainerStyles = cva([
    "flex",
    "w-full",
    "transition-all"
  ], {
    variants: {
      size: {
        sm: ["h-8"],
        default: ["h-10"],
        lg: ["h-12"],
      },
    },
    defaultVariants: {
      size: "default",
    },
  });

  let basePrefixStyles = cva(
    [
      "text-tertiary-400",
      "dark:text-tertiary-500",
      "border-l",
      "border-y",
      "bg-tertiary-100/50",
      "dark:bg-tertiary-900/50",
      "rounded-l-md",
      "border-tertiary-200",
      "dark:border-tertiary-700",
      "flex",
      "items-center",
      "justify-center",
      "h-full",
      "aspect-square",
      "transition-all"
    ],
    {
      variants: {
        size: {
          sm: ["text-sm"],
          default: ["text-base"],
          lg: ["text-lg"],
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

  let baseSuffixStyles = cva(
    [
      "text-tertiary-400",
      "dark:text-tertiary-500",
      "border-r",
      "border-y",
      "bg-tertiary-100/50",
      "dark:bg-tertiary-900/50",
      "rounded-r-md",
      "border-tertiary-200",
      "dark:border-tertiary-700",
      "flex",
      "items-center",
      "justify-center",
      "h-full",
      "aspect-square",
      "transition-all"
    ],
    {
      variants: {
        size: {
          sm: ["text-sm"],
          default: ["text-base"],
          lg: ["text-lg"],
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

  let baseLeftIconStyles = cva(
    [
      "absolute",
      "z-10",
      "text-tertiary-400",
      "dark:text-tertiary-500",
      "transition-all"
    ],
    {
      variants: {
        size: {
          sm: ["left-2", "text-sm"],
          default: ["left-3", "text-base"],
          lg: ["left-4", "text-lg"],
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

  let baseRightIconStyles = cva(
    [
      "absolute",
      "z-10",
      "text-tertiary-400",
      "dark:text-tertiary-500",
      "transition-all"
    ],
    {
      variants: {
        size: {
          sm: ["right-2", "text-sm"],
          default: ["right-3", "text-base"],
          lg: ["right-4", "text-lg"],
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

  let baseInputStyles = cva(
    [
      "w-full",
      "h-full",
      "bg-tertiary-50",
      "dark:bg-tertiary-950",
      "border-tertiary-200",
      "dark:border-tertiary-700",
      "rounded-md",
      "placeholder-tertiary-400",
      "dark:placeholder-tertiary-500",
      "focus:ring-0",
      "focus:border-tertiary-950",
      "dark:focus:border-tertiary-50",
      "absolute",
      "inset-0",
      "transition-all"
    ],
    {
      variants: {
        size: {
          sm: ["text-sm"],
          default: ["text-base"],
          lg: ["text-lg"],
        },
        prefix: {
          true: ["rounded-l-none"],
        },
        suffix: {
          true: ["rounded-r-none"],
        },
        disabled: {
          true: [
            "bg-tertiary-200",
            "dark:bg-tertiary-800",
            "disabled:pointer-events-none",
            "opacity-40",
          ],
        },
      },
      compoundVariants: [
        {
          size: "sm",
          leftIcon: true,
          className: "pl-7",
        },
        {
          size: "sm",
          rightIcon: true,
          className: "pr-7",
        },
        {
          size: "default",
          leftIcon: true,
          className: "pl-9",
        },
        {
          size: "default",
          rightIcon: true,
          className: "pr-9",
        },
        {
          size: "lg",
          leftIcon: true,
          className: "pl-12",
        },
        {
          size: "lg",
          rightIcon: true,
          className: "pr-12",
        },
      ],
      defaultVariants: {
        size: "default",
        prefix: false,
        suffix: false,
        leftIcon: false,
        rightIcon: false,
        disabled: false,
      },
    }
  );

  return (
    // container
    <div className={mergeClasses(baseInputContainerStyles({ size }))}>
      {/* prefix */}
      {prefix && (
        <div className={mergeClasses(basePrefixStyles({ size }))}>{prefix}</div>
      )}
      {/* input */}
      <div className="relative flex h-full w-full items-center">
        {/* left icon */}
        {leftIcon && (
          <div className={mergeClasses(baseLeftIconStyles({ size }))}>
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={mergeClasses(
            baseInputStyles({
              size,
              prefix: !!prefix,
              suffix: !!suffix,
              leftIcon: !!leftIcon,
              rightIcon: !!rightIcon,
              disabled,
            })
          )}
        />
        {/* right icon */}
        {rightIcon && (
          <div className={mergeClasses(baseRightIconStyles({ size }))}>
            {rightIcon}
          </div>
        )}
      </div>
      {/* suffix */}
      {suffix && (
        <div className={mergeClasses(baseSuffixStyles({ size }))}>{suffix}</div>
      )}
    </div>
  );
};

export default Input;
