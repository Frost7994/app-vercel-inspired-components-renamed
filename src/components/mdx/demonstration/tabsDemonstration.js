// state
import { useState } from "react";

// components
import Tabs, { TabPanel } from "@/components/ui/tabs";
import RadioGroup from "@/components/ui/radioGroup";

const TabsDemonstration = () => {
    // data
    const variants = ["default", "primary", "secondary"];

    // state
    const [variant, setVariant] = useState("default");
    const [disabled, setDisabled] = useState(false);
    const [vertical, setVertical] = useState(false);

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
                        <p>Vertical:</p>
                        <RadioGroup
                            size="sm"
                            values={["true", "false"]}
                            active={vertical ? "true" : "false"}
                            setActive={(value) =>
                                setVertical(value === "true" ? true : false)
                            }
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
                <div className="flex flex-col w-full rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Tabs
                        tabs={['One', 'Two', 'Three']}
                        vertical={vertical}
                        disabled={disabled}
                        variant={variant}
                    >
                        <TabPanel>One</TabPanel>
                        <TabPanel>Two</TabPanel>
                        <TabPanel>Three</TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default TabsDemonstration;
