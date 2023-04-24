// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Switch from "@/components/ui/switch";

const SwitchDemonstration = () => {
    // data
    const variants = ["default", "primary", "secondary"];
    const styles = ["default", "outline", "ghost"];
    const sizes = ["sm", "default", "lg"];
    const values = [{ name: "Off", value: false }, { name: "On", value: true }]

    // state
    const [active, setActive] = useState(values[0]);
    const [variant, setVariant] = useState("default");
    const [style, setStyle] = useState("default");
    const [size, setSize] = useState("default");
    const [fullWidth, setFullWidth] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

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
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Switch
                        values={values}
                        defaultActive={false}
                        onChange={setActive}
                        size={size}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default SwitchDemonstration;