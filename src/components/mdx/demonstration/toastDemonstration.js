// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Button from "@/components/ui/button";

// utils
import toast from "react-hot-toast";
import Input from "@/components/ui/input";

const ToastDemonstration = () => {
    // data
    const variants = ["default", "success", "error", "loading", "warning"];

    // state
    const [variant, setVariant] = useState("success");
    const [title, setTitle] = useState("Error");
    const [message, setMessage] = useState("Something went wrong!");

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
                        <p>Variant:</p>
                        <RadioGroup
                            size="sm"
                            values={variants}
                            active={variant}
                            setActive={setVariant}
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Button onClick={() => {
                        toast(message, {
                            type: variant,
                            duration: 2000,
                            title
                        })
                    }}>Send Toast</Button>
                </div>
            </div>
        </div>
    );
};

export default ToastDemonstration;
