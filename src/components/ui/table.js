// base
import { BiArrowToTop, BiArrowToBottom } from "react-icons/bi"

const Table = ({ tableInstance }) => {
    let {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <table {...getTableProps()} className="min-w-full divide-y divide-tertiary-200 dark:divide-tertiary-700 border-separate border-spacing-0">
            <thead className="bg-tertiary-100 dark:bg-tertiary-900/50 border-tertiary-200 dark:border-tertiary-700">
                {headerGroups.map((headerGroup, i) => (
                    <tr key={`header-${i}`} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, j) => (
                            <th
                                key={`header-row-${j}`}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className="whitespace-nowrap py-3.5 px-5 text-left text-sm border-y first:border-l first:rounded-l-md border-tertiary-200 dark:border-tertiary-700 last:border-r last:rounded-r-md">
                                {column.render("Header")}
                                {column.isSorted ? column.isSortedDesc ?
                                    <BiArrowToTop className="w-4 h-4 text-tertiary-950 dark:text-tertiary-50 inline-block ml-1" /> :
                                    <BiArrowToBottom className="w-4 h-4 text-tertiary-950 dark:text-tertiary-50 inline-block ml-1" /> :
                                    null
                                }
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} className="divide-y divide-tertiary-200 dark:divide-tertiary-700">
                {rows.map((row, k) => {
                    prepareRow(row);
                    return (
                        <tr key={`table-row-${k}`} {...row.getRowProps()}>
                            {row.cells.map((cell, l) => {
                                return (
                                    <td
                                        key={`body-cell-${k}`}
                                        {...cell.getCellProps()}
                                        className="whitespace-nowrap border-b border-tertiary-200 dark:border-tertiary-700 py-4 px-5 text-sm font-medium text-tertiary-400 dark:text-tertiary-500">
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
};

export default Table;