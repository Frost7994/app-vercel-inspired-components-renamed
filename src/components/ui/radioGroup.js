// components
import { RadioGroup as RadioGroupRoot } from "@headlessui/react";

// utils
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import mergeClasses from "@/utils/helpers/mergeClasses";

const RadioGroup = ({
  values,
  active,
  setActive,
  size,
  disabled,
  className,
}) => {
  let baseToggleStyles = cva(
    [
      "flex",
      "items-center",
      "font-medium",
      "justify-center",
      "px-3",
      "rounded-sm",
      "py-1",
      "capitalize",
      "cursor-pointer",
      "transition-all",
    ],
    {
      variants: {
        size: {
          sm: ["text-sm"],
          default: ["text-base"],
          lg: ["text-lg"],
        },
        checked: {
          true: [
            "bg-tertiary-300 dark:bg-tertiary-800",
            "text-tertiary-950 dark:text-tertiary-50",
          ],
          false: [
            "bg-tertiary-50 dark:bg-tertiary-950",
            "text-tertiary-400 dark:text-tertiary-500",
            "hover:text-tertiary-950 hover:dark:text-tertiary-50",
          ],
        },
        disabled: {
          true: ["pointer-events-none"],
        },
      },
      compoundVariants: [
        {
          checked: false,
          disabled: true,
          className: "opacity-25",
        },
      ],
      defaultVariants: {
        size: "default",
        checked: false,
        disabled: false,
      },
    }
  );

  return (
    <RadioGroupRoot
      disabled={disabled}
      value={active}
      onChange={setActive}
      className={clsx(
        "flex h-fit w-fit flex-shrink-0 items-center rounded-md border border-tertiary-200 bg-tertiary-50 p-1 dark:border-tertiary-700 dark:bg-tertiary-950",
        className
      )}
    >
      {values.map((toggle) => (
        <RadioGroupRoot.Option key={uuidv4()} value={toggle}>
          {({ checked }) => (
            <span
              className={mergeClasses(
                baseToggleStyles({ size, checked, disabled })
              )}
            >
              {toggle}
            </span>
          )}
        </RadioGroupRoot.Option>
      ))}
    </RadioGroupRoot>
  );
};

export default RadioGroup;
