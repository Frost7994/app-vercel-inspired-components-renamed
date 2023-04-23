import { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from "react-table";

//* -- Properties returned from tableInstance -- *//

//+ -- BASIC PROPERTIES -- +//
//+    getTableProps, getTableBodyProps,
//+    headerGroups, page, prepareRow.

//? -- Pagination features -- ?//
//?    canPreviousPage, canNextPage, pageOptions, pageCount,
//?    gotoPage, nextPage, previousPage, setPageSize.

//! -- General filtering -- !//
//!    setFilter,

//* -- Global filtering -- *//
//*    setGlobalFilter,

//+ -- Relevant for pagination and global filters
//+    state: { pageIndex, pageSize, globalFilter },

const useCustomTable = ({
  data,
  columns,
  initialState,
  enableSortBy = false,
  enableFilters = false,
  enableGlobalFilters = false,
}) => {
  // memoize the data
  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(() => data, []);

  // useTable hook
  const tableInstance = useTable(
    {
      data: memoizedData,
      columns: memoizedColumns,

      // set pageIndex and pageSize here
      initialState,

      // sorting is disabled by default
      disableSortBy: !enableSortBy,

      // filtering is disabled by default
      disableFilters: !enableFilters,

      // global filtering is disabled by default
      disableGlobalFilters: !enableGlobalFilters,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return tableInstance;
};

export default useCustomTable;
