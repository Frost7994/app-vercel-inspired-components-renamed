// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Toggle from "@/components/ui/toggle";

const ToggleDemonstration = () => {
    // data
    const variants = ["default", "primary", "secondary"];
    const styles = ["default", "outline", "ghost"];
    const sizes = ["sm", "default", "lg"];

    // state
    const [enabled, setEnabled] = useState(false);
    const [variant, setVariant] = useState("default");
    const [size, setSize] = useState("default");
    const [disabled, setDisabled] = useState(false);

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
                        <p>Size:</p>
                        <RadioGroup
                            size="sm"
                            values={sizes}
                            active={size}
                            setActive={setSize}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Disabled:</p>
                        <RadioGroup
                            size="sm"
                            values={["true", "false"]}
                            active={disabled ? "true" : "false"}
                            setActive={(value) =>
                                setDisabled(value === "true" ? true : false)
                            }
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-950 border border-tertiary-200 dark:border-tertiary-700">
                    <Toggle
                        size={size}
                        variant={variant}
                        disabled={disabled}
                        enabled={enabled}
                        setEnabled={setEnabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToggleDemonstration;
