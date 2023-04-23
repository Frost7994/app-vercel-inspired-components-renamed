import { useCustomPagination } from '@/utils/hooks/useCustomPagination';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { cva } from 'class-variance-authority';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        variant = 'default',
        style = 'outline',
        size = 'default',
    } = props;

    const paginationRange = useCustomPagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    const PaginationButton = ({ children, onClick, disabled }) => {
        const basePaginationButtonStyles = cva([
            'transition-all',
            'ease-in-out',
            'active:scale-95',
            'border',
            'rounded-md',
            'font-medium',
            'flex-shrink-0',
            'flex',
            'justify-center',
            'items-center',
        ], {
            variants: {
                size: {
                    sm: [
                        'text-sm',
                        'h-6',
                        'w-6',
                    ],
                    default: [
                        'text-base',
                        'h-8',
                        'w-8',
                    ],
                    lg: [
                        'text-lg',
                        'h-10',
                        'w-10',
                    ]
                },
                disabled: {
                    true: [
                        'pointer-events-none',
                        'opacity-40',
                    ]
                },
            },
            compoundVariants: [
                {
                    variant: 'default',
                    style: 'default',
                    className: [
                        'text-tertiary-50 dark:text-tertiary-950',
                        'bg-tertiary-950 dark:bg-tertiary-50',
                        'border-tertiary-950 dark:border-tertiary-50',
                        'hover:bg-transparent dark:hover:bg-transparent',
                        'hover:text-tertiary-950 dark:hover:text-tertiary-200',
                        'hover:border-tertiary-950 dark:hover:border-tertiary-200',
                    ]
                },
                {
                    variant: 'default',
                    style: 'outline',
                    className: [
                        'text-tertiary-950 dark:text-tertiary-200',
                        'bg-transparent',
                        'border-tertiary-950 dark:border-tertiary-200',
                        'hover:bg-tertiary-950 dark:hover:bg-tertiary-200',
                        'hover:border-tertiary-950 dark:hover:border-tertiary-200',
                        'hover:text-tertiary-200 dark:hover:text-tertiary-950',
                    ]
                },
                {
                    variant: 'default',
                    style: 'ghost',
                    className: [
                        'border-transparent',
                        'text-tertiary-950 dark:text-tertiary-50',
                        'hover:bg-tertiary-200 hover:dark:bg-tertiary-800',
                    ]
                },
                {
                    variant: 'primary',
                    style: 'default',
                    className: [
                        'text-tertiary-50',
                        'bg-primary-500',
                        'border-primary-500',
                        'hover:bg-transparent',
                        'hover:text-primary-500',
                        'hover:border-primary-500',
                    ]
                },
                {
                    variant: 'primary',
                    style: 'outline',
                    className: [
                        'text-primary-500',
                        'bg-transparent',
                        'border-primary-500',
                        'hover:bg-primary-500',
                        'hover:border-primary-500',
                        'hover:text-tertiary-50',
                    ]
                },
                {
                    variant: 'primary',
                    style: 'ghost',
                    className: [
                        'border-transparent',
                        'text-primary-500',
                        'hover:bg-primary-100 hover:dark:bg-primary-800',
                    ]
                },
                {
                    variant: 'secondary',
                    style: 'default',
                    className: [
                        'text-tertiary-50',
                        'bg-secondary-500',
                        'border-secondary-500',
                        'hover:bg-transparent',
                        'hover:text-secondary-500',
                        'hover:border-secondary-500',
                    ]
                },
                {
                    variant: 'secondary',
                    style: 'outline',
                    className: [
                        'text-secondary-500',
                        'bg-transparent',
                        'border-secondary-500',
                        'hover:bg-secondary-500',
                        'hover:border-secondary-500',
                        'hover:text-tertiary-50',
                    ]
                },
                {
                    variant: 'secondary',
                    style: 'ghost',
                    className: [
                        'border-transparent',
                        'text-secondary-500',
                        'hover:bg-secondary-100 hover:dark:bg-secondary-800',
                    ]
                },

            ],
            defaultVariants: {
                size: 'default',
                style: 'default',
                variant: 'default',
                disabled: false,
            }
        })

        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={basePaginationButtonStyles({ size, style, variant, disabled })}>
                {children}
            </button>
        )
    }

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <ul
            className='flex items-center gap-2'>
            {/* Left navigation arrow */}
            <li>
                <PaginationButton
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                >
                    <BiChevronLeft />
                </PaginationButton>
            </li >
            {paginationRange.map(pageNumber => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === '...') {

                    return <li
                        key={'s'}

                        className="pagination-item dots">
                        <PaginationButton >
                            &#8230;
                        </PaginationButton>
                    </li>;
                }

                // Render our Page Pills
                return (
                    <li key={'s'}>
                        <PaginationButton
                            onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </PaginationButton>
                    </li>
                );
            })
            }
            {/*  Right Navigation arrow */}
            <li>
                <PaginationButton
                    onClick={onNext}
                    disabled={currentPage === 20}>
                    <BiChevronRight />
                </PaginationButton>
            </li >
        </ul >
    );
};

export default Pagination;