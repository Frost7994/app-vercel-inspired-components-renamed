import Table from "@/components/ui/table"
import useCustomTable from "@/utils/hooks/useCustomTable"
import Checkbox from "@/components/ui/checkbox"

const Component = () => {
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

    let tableInstance = useCustomTable({
        data: tableData, columns: tableColumns, initialState: {
            pageIndex: 0,
            pageSize: 1,
        }
    })

    return (
        <Table tableInstance={tableInstance} />
    )
}

export default Component