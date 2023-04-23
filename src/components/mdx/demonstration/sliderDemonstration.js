// state
import { useState } from "react";

// components
import Slider from "@/components/ui/slider";

const SliderDemonstration = () => {
    // state
    const [value, setValue] = useState(20);

    return (
        <div className="not-prose">
            <div className="rounded-md border border-tertiary-200 bg-tertiary-50 p-3 dark:border-tertiary-700 dark:bg-tertiary-950 sm:hidden">
                <p className="text-sm">
                    View this page on a screen bigger than 640px to use the sandbox.
                </p>
            </div>
            <div className="hidden gap-6 sm:flex">
                <div className="flex flex-col gap-2">

                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Slider
                        defaultValue={value}
                        min={0}
                        max={100}
                        value={value}
                        onChange={setValue}
                        ariaLabel="Slider"
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderDemonstration;
