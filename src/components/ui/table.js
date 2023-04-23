// base
import { BiArrowToTop, BiArrowToBottom } from "react-icons/bi";

const Table = ({ tableInstance }) => {
  let { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="min-w-full border-separate border-spacing-0 divide-y divide-tertiary-200 dark:divide-tertiary-700"
    >
      <thead className="border-tertiary-200 bg-tertiary-100 dark:border-tertiary-700 dark:bg-tertiary-900/50">
        {headerGroups.map((headerGroup, i) => (
          <tr key={`header-${i}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <th
                key={`header-row-${j}`}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="whitespace-nowrap border-y border-tertiary-200 px-5 py-3.5 text-left text-sm first:rounded-l-md first:border-l last:rounded-r-md last:border-r dark:border-tertiary-700"
              >
                {column.render("Header")}
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <BiArrowToTop className="ml-1 inline-block h-4 w-4 text-tertiary-950 dark:text-tertiary-50" />
                  ) : (
                    <BiArrowToBottom className="ml-1 inline-block h-4 w-4 text-tertiary-950 dark:text-tertiary-50" />
                  )
                ) : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="divide-y divide-tertiary-200 dark:divide-tertiary-700"
      >
        {page.map((row, k) => {
          prepareRow(row);
          return (
            <tr key={`table-row-${k}`} {...row.getRowProps()}>
              {row.cells.map((cell, l) => {
                return (
                  <td
                    key={`body-cell-${k}`}
                    {...cell.getCellProps()}
                    className="whitespace-nowrap border-b border-tertiary-200 px-5 py-4 text-sm font-medium text-tertiary-400 dark:border-tertiary-700 dark:text-tertiary-500"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
