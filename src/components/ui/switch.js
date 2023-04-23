// state
import { useState } from "react";

// components
import { RadioGroup } from "@headlessui/react";

// utils
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import mergeClasses from "@/utils/helpers/mergeClasses";

const Switch = ({ values, defaultActive, onChange = () => { }, size, disabled, className }) => {
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
        fullWidth: {
          true: [],
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

  let [active, setActive] = useState(
    values.find((value) => value.value === defaultActive)
  );

  return (
    <RadioGroup
      disabled={disabled}
      value={active.value}
      onChange={(val) => {
        setActive(values.find((value) => value.value === val));
        onChange();
      }}
      className={clsx(
        "transition-all flex h-fit w-fit flex-shrink-0 items-center rounded-md border border-tertiary-200 bg-tertiary-50 p-1 dark:border-tertiary-700 dark:bg-tertiary-950",
        className
      )}
    >
      {values.map((toggle) => (
        <RadioGroup.Option key={uuidv4()} value={toggle.value}>
          {({ checked }) => (
            <span
              className={mergeClasses(
                baseToggleStyles({ size, checked, disabled })
              )}
            >
              {toggle.name}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default Switch;
