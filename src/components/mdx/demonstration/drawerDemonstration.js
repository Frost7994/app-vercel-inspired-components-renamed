// state
import { useState } from "react";

// components
import Button from "@/components/ui/button";
import RadioGroup from "@/components/ui/radioGroup";
import Drawer from "@/components/ui/drawer";

const DrawerDemonstration = () => {
  // data
  const directions = ["left", "right", "top", "bottom"];

  // state
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState("left");

  return (
    <div className="not-prose">
      <div className="flex rounded-md border border-tertiary-200 bg-tertiary-50 p-3 dark:border-tertiary-700 dark:bg-tertiary-950 sm:hidden">
        <p className="text-sm">
          View this page on a screen bigger than 640px to use the sandbox.
        </p>
      </div>
      <div className="hidden gap-6 sm:flex">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p>Direction:</p>
            <RadioGroup
              size="sm"
              values={directions}
              active={direction}
              setActive={setDirection}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} direction={direction}>
            <p>Hello form drawer</p>
          </Drawer>
          <Button size="sm" onClick={() => setIsOpen(true)}>
            Open Drawer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawerDemonstration;
