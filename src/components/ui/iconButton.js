// base
import { ImSpinner3 } from "react-icons/im"

// utils
import { cva } from "class-variance-authority"
import mergeClasses from "@/utils/helpers/mergeClasses"
import clsx from "clsx"

// styling
export const baseButtonStyles = cva([
    'transition-all',
    'ease-in-out',
    'active:scale-95',
    'border',
    'rounded-md',
    'font-medium',
    'flex-shrink-0',
    'h-fit'
], {
    variants: {
        size: {
            sm: [
                'text-sm',
                'p-1'
            ],
            default: [
                'text-base',
                'p-2'
            ],
            lg: [
                'text-lg',
                'p-3'
            ]
        },
        disabled: {
            true: [
                'pointer-events-none',
                'opacity-40',
            ]
        },
        loading: {
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
        loading: false,
    }
})


const IconButton = ({
    icon,
    type = 'button',
    onClick,
    size,
    style,
    variant,
    disabled,
    loading,
    fullWidth,
    className
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={mergeClasses(baseButtonStyles({
                size,
                variant,
                style,
                disabled,
                loading,
                fullWidth
            }), className)}>
            {loading && <ImSpinner3 className="animate-spin" />}
            <span className={clsx('flex-shrink-0', loading && 'hidden')}>{icon}</span>
        </button>
    )
}

export default IconButton
