// state
import { useState } from "react";

// components
import Button from "@/components/ui/button";
import RadioGroup from "@/components/ui/radioGroup";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/input";

const ModalDemonstration = () => {
    // state
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("Modal");
    const [description, setDescription] = useState("This is the modal description");
    const [modalActions, setModalActions] = useState(false);

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
                        <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <p>Modal Actions:</p>
                        <RadioGroup
                            size="sm"
                            values={["true", "false"]}
                            active={modalActions ? "true" : "false"}
                            setActive={(value) =>
                                setModalActions(value === "true" ? true : false)
                            }
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Modal
                        title={title !== "" ? title : null}
                        description={description !== "" ? description : null}
                        //  children,
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        modalActions={modalActions && (<>
                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsOpen(false)}>Submit</Button>
                        </>)}
                    >
                        <p>This is some modal content.</p>
                    </Modal>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDemonstration;
