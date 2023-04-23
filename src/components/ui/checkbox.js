// base
import { BiCheck } from "react-icons/bi";

// components
import * as CheckboxRoot from "@radix-ui/react-checkbox";

// utils
import { cva } from "class-variance-authority";
import mergeClasses from "@/utils/helpers/mergeClasses";

const Checkbox = ({
  disabled,
  checked,
  setChecked,
  defaultChecked = false,
  size,
  variant,
  className,
}) => {
  // styling
  let baseCheckboxStyles = cva(
    [
      "border",
      "overflow-hidden",
      "rounded-md",
      "flex",
      "items-center",
      "justify-center",
      "transition-all",
    ],
    {
      variants: {
        size: {
          sm: ["h-4", "w-4"],
          default: ["h-5", "w-5"],
          lg: ["h-6", "w-6"],
        },
        variant: {
          default: [
            "border-tertiary-300",
            "dark:border-tertiary-700",
            "hover:border-tertiary-950",
            "hover:dark:border-tertiary-50",
          ],
          primary: ["border-primary-500", "hover:border-primary-600"],
          secondary: ["border-secondary-500", "hover:border-secondary-600"],
        },
        disabled: {
          true: ["disabled:pointer-events-none", "disabled:opacity-40"],
        },
      },
      defaultVariants: {
        size: "default",
        variant: "default",
      },
    }
  );

  let baseCheckboxIndicatorStyles = cva(
    ["flex", "items-center", "justify-center", "h-full", "w-full"],
    {
      variants: {
        size: {
          sm: ["text-xs"],
          default: ["text-base"],
          lg: ["text-lg"],
        },
        variant: {
          default: [
            "bg-tertiary-950",
            "dark:bg-tertiary-50",
            "text-tertiary-50",
            "dark:text-tertiary-950",
          ],
          primary: ["bg-primary-500", "text-primary-50"],
          secondary: ["bg-secondary-500", "text-secondary-50"],
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  return (
    <CheckboxRoot.Root
      disabled={disabled}
      id="c1"
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={setChecked}
      className={mergeClasses(
        baseCheckboxStyles({ variant, size, disabled }),
        className
      )}
    >
      <CheckboxRoot.Indicator
        className={mergeClasses(baseCheckboxIndicatorStyles({ variant, size }))}
      >
        <BiCheck />
      </CheckboxRoot.Indicator>
    </CheckboxRoot.Root>
  );
};

export default Checkbox;
