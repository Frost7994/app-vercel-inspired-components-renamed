// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Pagination from "@/components/ui/pagination";

const PaginationDemonstration = () => {
    // data
    const variants = ["default", "primary", "secondary"];
    const styles = ["default", "outline", "ghost"];
    const sizes = ["sm", "default", "lg"];
    const siblingCount = [0, 1, 2];
    const totalCount = [20, 50, 100]
    const pageAmount = [1, 5, 10]

    // state
    const [currentPage, setCurrentPage] = useState(1);
    const [variant, setVariant] = useState("default");
    const [style, setStyle] = useState("outline");
    const [size, setSize] = useState("default");
    const [sibling, setSibling] = useState(0);
    const [totalCountState, setTotalCountState] = useState(50);
    const [pageAmountState, setPageAmountState] = useState(5);

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
                        <p>Style:</p>
                        <RadioGroup
                            size="sm"
                            values={styles}
                            active={style}
                            setActive={setStyle}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Sibling Count:</p>
                        <RadioGroup
                            size="sm"
                            values={siblingCount}
                            active={sibling}
                            setActive={setSibling}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Amount per page:</p>
                        <RadioGroup
                            size="sm"
                            values={pageAmount}
                            active={pageAmountState}
                            setActive={setPageAmountState}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Total pages:</p>
                        <RadioGroup
                            size="sm"
                            values={totalCount}
                            active={totalCountState}
                            setActive={setTotalCountState}
                        />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center rounded-md bg-tertiary-100 p-8 dark:bg-tertiary-900">
                    <Pagination
                        onPageChange={setCurrentPage}
                        totalCount={totalCountState}
                        siblingCount={sibling}
                        currentPage={currentPage}
                        pageSize={pageAmountState}
                        variant={variant}
                        style={style}
                        size={size}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaginationDemonstration;
