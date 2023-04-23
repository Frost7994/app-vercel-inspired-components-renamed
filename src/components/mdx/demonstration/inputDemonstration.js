// state
import { useState } from "react";

// base
import { AiOutlineAim } from "react-icons/ai";

// components
import Input from "@/components/ui/input";
import RadioGroup from "@/components/ui/radioGroup";

const InputDemonstration = () => {
    // data
    const sizes = ["sm", "default", "lg"];
    const preSuffixes = ["prefix", "none", "suffix"];
    const leftRights = ["left", "none", "right"];

    // state
    const [size, setSize] = useState("default");
    const [disabled, setDisabled] = useState(false);
    const [preSuffix, setPreSuffix] = useState("none");
    const [leftRight, setLeftRight] = useState("none");

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
                    <div className="flex flex-col">
                        <p>Prefix/Suffix:</p>
                        <RadioGroup
                            size="sm"
                            values={preSuffixes}
                            active={preSuffix}
                            setActive={setPreSuffix}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Left/Right:</p>
                        <RadioGroup
                            size="sm"
                            values={leftRights}
                            active={leftRight}
                            setActive={setLeftRight}
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Input
                        size={size}
                        disabled={disabled}
                        prefix={preSuffix === "prefix" ? <AiOutlineAim /> : null}
                        suffix={preSuffix === "suffix" ? <AiOutlineAim /> : null}
                        leftIcon={leftRight === "left" ? <AiOutlineAim /> : null}
                        rightIcon={leftRight === "right" ? <AiOutlineAim /> : null}

                    />
                </div>
            </div>
        </div>
    );
};

export default InputDemonstration;
