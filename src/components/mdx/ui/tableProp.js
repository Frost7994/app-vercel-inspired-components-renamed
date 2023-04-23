// utils
import clsx from "clsx";

const TableProp = ({ children, type }) => {
    return (
        <div className={
            clsx('not-prose w-fit', type === 'solid' ? 'bg-primary-100 px-2 text-primary-500 dark:bg-primary-800 rounded-md' : 'text-primary-500 font-medium')
        }>
            {children}
        </div>
    )
}

export default TableProp