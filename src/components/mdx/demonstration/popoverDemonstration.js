// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Popover from "@/components/ui/popover";

const PopoverDemonstration = () => {
    // data
    const variants = ["default", "primary", "secondary"];
    const styles = ["default", "outline", "ghost"];
    const positions = ["left", "right"];
    const sizes = ["sm", "default", "lg"];

    // state
    const [variant, setVariant] = useState("default");
    const [style, setStyle] = useState("default");
    const [size, setSize] = useState("default");
    const [position, setPosition] = useState('left');

    return (
        <div className="not-prose">
            <div className="rounded-md border border-tertiary-200 bg-tertiary-50 p-3 dark:border-tertiary-700 dark:bg-tertiary-950 sm:hidden">
                <p className="text-sm">
                    View this page on a screen bigger than 640px to use the sandbox.
                </p>
            </div>
            <div className="hidden gap-6 sm:flex">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <p>Variant:</p>
                        <RadioGroup
                            size="sm"
                            values={variants}
                            active={variant}
                            setActive={setVariant}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Style:</p>
                        <RadioGroup
                            size="sm"
                            values={styles}
                            active={style}
                            setActive={setStyle}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Size:</p>
                        <RadioGroup
                            size="sm"
                            values={sizes}
                            active={size}
                            setActive={setSize}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Position:</p>
                        <RadioGroup
                            size="sm"
                            values={positions}
                            active={position}
                            setActive={(value) =>
                                setPosition(value)
                            }
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Popover
                        btnLabel='Popover'
                        btnSize={size}
                        btnVariant={variant}
                        btnStyle={style}
                        position={position}
                    >
                        <p className="whitespace-nowrap">Hello from popover!</p>
                    </Popover>
                </div>
            </div>
        </div >
    );
};

export default PopoverDemonstration;
