import { Tab as TabRoot } from "@headlessui/react";
import { Fragment } from "react";
import { cva } from "class-variance-authority";

const Tabs = ({ tabs, children, vertical, disabled, variant }) => {
  const baseTabContainerStyles = cva(["flex", "h-full", "gap-2"], {
    variants: {
      vertical: {
        true: ["flex-row"],
        false: ["flex-col"],
      },
      disabled: {
        true: ["disabled:pointer-events-none"],
      },
    },
    defaultVariants: {
      vertical: false,
      disabled: false,
    },
  });

  const baseTabListStyles = cva(
    ["border-tertiary-200", "dark:border-tertiary-700", "flex"],
    {
      variants: {
        vertical: {
          true: ["border-r-2", "flex-col"],
          false: ["border-b-2"],
        },
      },
      defaultVariants: {
        vertical: false,
      },
    }
  );

  const baseTabStyles = cva(
    ["px-2", "py-1", "capitalize", "focus:outline-none"],
    {
      variants: {
        vertical: {
          true: ["border-r-2", "-mr-[1px]", "text-left"],
          false: ["border-b-2", "-mb-0.5", "first:pl-0"],
        },
      },
      compoundVariants: [
        {
          selected: false,
          disabled: true,
          className: ["disabled:opacity-25"],
        },
        {
          variant: ["primary", "secondary", "default"],
          selected: false,
          className: ["border-tertiary-200", "dark:border-tertiary-700"],
        },
        {
          variant: "default",
          selected: true,
          className: ["border-tertiary-950", "dark:border-tertiary-50"],
        },
        {
          variant: "primary",
          selected: true,
          className: ["border-primary-500", "text-primary-500"],
        },
        {
          variant: "secondary",
          selected: true,
          className: ["border-secondary-500", "text-secondary-500"],
        },
      ],
      defaultVariants: {
        selected: false,
        vertical: false,
        disabled: false,
        variant: "default",
      },
    }
  );

  return (
    <TabRoot.Group
      vertical={vertical}
      as="div"
      className={baseTabContainerStyles({ vertical, disabled })}
    >
      <TabRoot.List className={baseTabListStyles({ vertical })}>
        {tabs.map((tab, index) => (
          <TabRoot disabled={disabled} key={index} as={Fragment}>
            {({ selected }) => (
              <button
                className={baseTabStyles({
                  selected,
                  vertical,
                  disabled,
                  variant,
                })}
              >
                {tab}
              </button>
            )}
          </TabRoot>
        ))}
      </TabRoot.List>
      <TabRoot.Panels>{children}</TabRoot.Panels>
    </TabRoot.Group>
  );
};

export default Tabs;

export const TabPanel = ({ children }) => {
  return <TabRoot.Panel>{children}</TabRoot.Panel>;
};
