// state
import { useState } from "react";

// components
import Error from "@/components/ui/error";
import Input from "@/components/ui/input";
import RadioGroup from "@/components/ui/radioGroup";

const ErrorDemonstration = () => {
    // data
    const styles = ["default", "outline", "ghost"];
    const sizes = ["sm", "default", "lg"];

    // state
    const [title, setTitle] = useState("Error");
    const [message, setMessage] = useState("Something went wrong!");
    const [style, setStyle] = useState("default");
    const [size, setSize] = useState("default");
    const [icon, setIcon] = useState(true);

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
                        <p>Title:</p>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <p>Message:</p>
                        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
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
                        <p>Icon:</p>
                        <RadioGroup
                            size="sm"
                            values={["true", "false"]}
                            active={icon ? "true" : "false"}
                            setActive={(value) =>
                                setIcon(value === "true" ? true : false)
                            }
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Error
                        size={size}
                        icon={icon}
                        title={title}
                        message={message}
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorDemonstration;
