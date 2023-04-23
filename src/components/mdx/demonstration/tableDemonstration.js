// state
import { useState } from "react";

// components
import RadioGroup from "@/components/ui/radioGroup";
import Table from "@/components/ui/table";
import Checkbox from "@/components/ui/checkbox";

// utils
import useCustomTable from "@/utils/hooks/useCustomTable";
import Input from "@/components/ui/input";

const TableDemonstration = () => {
    // data
    let tableData = [
        {
            name: "John Doe",
            email: "johndoe123@gmail.com",
            phone: "123-456-7890",
            website: "https://johndoe.com",
            available: true,
        },
        {
            name: "Peter Parker",
            email: "pparker54@yahoo.ie",
            phone: "123-454-1290",
            website: "https://pparker.com",
            available: true,
        },
        {
            name: "John Doe",
            email: "johndoe123@gmail.com",
            phone: "123-456-7890",
            website: "https://johndoe.com",
            available: true,
        },
        {
            name: "Jane Smith",
            email: "janesmith21@hotmail.co.uk",
            phone: "098-765-4321",
            website: "https://janesmith.com",
            available: false,
        },
        {
            name: "Peter Parker",
            email: "pparker54@yahoo.ie",
            phone: "123-454-1290",
            website: "https://pparker.com",
            available: true,
        },
        {
            name: "John Doe",
            email: "johndoe123@gmail.com",
            phone: "123-456-7890",
            website: "https://johndoe.com",
            available: true,
        },
        {
            name: "Jane Smith",
            email: "janesmith21@hotmail.co.uk",
            phone: "098-765-4321",
            website: "https://janesmith.com",
            available: false,
        },
        {
            name: "Peter Parker",
            email: "pparker54@yahoo.ie",
            phone: "123-454-1290",
            website: "https://pparker.com",
            available: true,
        }

    ]

    let tableColumns = [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Phone",
            accessor: "phone",
        },
        {
            Header: "Website",
            accessor: "website",
        },
        {
            Header: "Available",
            accessor: "available",
            Cell: ({ value }) => <Checkbox defaultChecked={value} />
        }
    ]

    // state
    let enableSort = ['true', 'false']
    let [enableSortBy, setEnableSortBy] = useState('false');

    let enableFilters = ['true', 'false']
    let [enableFiltersBy, setEnableFiltersBy] = useState('false');
    let [filter, setFilter] = useState('')

    let enableGlobalFilters = ['true', 'false']
    let [enableGlobalFiltersBy, setEnableGlobalFiltersBy] = useState('false');
    let [globalFilter, setGlobalFilter] = useState('')



    let tableInstance = useCustomTable({
        enableSortBy: enableSortBy === 'true' ? true : false,
        enableFiltersBy: enableFiltersBy === 'true' ? true : false,
        enableGlobalFiltersBy: enableGlobalFiltersBy === 'true' ? true : false,
        data: tableData,
        columns: tableColumns,
        initialState: {
            pageIndex: 0,
            pageSize: 10,
        }
    })


    return (
        <div className="not-prose">
            <div className="rounded-md border border-tertiary-200 bg-tertiary-50 p-3 dark:border-tertiary-700 dark:bg-tertiary-950 sm:hidden">
                <p className="text-sm">
                    View this page on a screen bigger than 640px to use the sandbox.
                </p>
            </div>
            <div className="hidden gap-6 sm:flex">
                <div className="flex flex-col gap-4 flex-shrink-0">
                    <div className="flex flex-col">
                        <p>Enable Sort:</p>
                        <RadioGroup
                            values={enableSort}
                            active={enableSortBy}
                            setActive={setEnableSortBy}
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Enable Filters:</p>
                        <RadioGroup
                            values={enableFilters}
                            active={enableFiltersBy}
                            setActive={setEnableFiltersBy}
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Enable Global Filters:</p>
                        <RadioGroup
                            values={enableGlobalFilters}
                            active={enableGlobalFiltersBy}
                            setActive={setEnableGlobalFiltersBy}
                            size="sm"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full items-center justify-center rounded-md bg-tertiary-50 p-8 dark:bg-tertiary-950 border border-tertiary-200 dark:border-tertiary-700">
                    <div className="flex w-full items-center gap-4">
                        {enableFiltersBy === 'true' && <div className="flex flex-col gap-1 w-full">
                            <p>Filter: (Name Only)</p>
                            <Input
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                    tableInstance.setFilter('name', e.target.value);
                                }}
                            />
                        </div>}
                        {enableGlobalFiltersBy === 'true' && <div className="flex flex-col gap-1 w-full">
                            <p>Filter: (Global)</p>
                            <Input
                                value={globalFilter}
                                onChange={(e) => {
                                    setGlobalFilter(e.target.value);
                                    tableInstance.setGlobalFilter(e.target.value);
                                }}
                            />
                        </div>}

                    </div>
                    <Table tableInstance={tableInstance} />
                </div>
            </div>
        </div>
    );
};

export default TableDemonstration;
