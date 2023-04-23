// components
import { Switch } from '@headlessui/react'

// utils
import { cva } from 'class-variance-authority'
import mergeClasses from '@/utils/helpers/mergeClasses'

const Toggle = ({ size, variant, disabled, enabled, setEnabled }) => {

    let toggleHandleStyles = cva([
        'inline-block',
        'transform',
        'rounded-full',
        'bg-tertiary-50',
        'transition'
    ], {
        variants: {
            size: {
                sm: [
                    'h-3',
                    'w-3',
                ],
                default: [
                    'h-4',
                    'w-4'
                ],
                lg: [
                    'h-5',
                    'w-5'
                ],
            },
        },
        compoundVariants: [
            {
                size: 'sm',
                enabled: true,
                className: [
                    'translate-x-4',
                ]
            },
            {
                size: 'sm',
                enabled: false,
                className: [
                    'translate-x-1',
                ]
            },
            {
                size: 'default',
                enabled: true,
                className: [
                    'translate-x-6',
                ]
            },
            {
                size: 'default',
                enabled: false,
                className: [
                    'translate-x-1',
                ]
            },
            {
                size: 'lg',
                enabled: true,
                className: [
                    'translate-x-8',
                ]
            },
            {
                size: 'lg',
                enabled: false,
                className: [
                    'translate-x-1',
                ]
            },
        ],
        defaultVariants: {
            size: 'default',
        },
    })

    let toggleContainerStyles = cva([
        'relative',
        'inline-flex',
        'items-center',
        'rounded-full'
    ], {
        variants: {
            size: {
                sm: [
                    'h-5',
                    'w-8'
                ],
                default: [
                    'h-6',
                    'w-11'
                ],
                lg: [
                    'h-7',
                    'w-14'
                ],
            },
            disabled: {
                true: [
                    'pointer-events-none',
                    'opacity-40',
                ]
            }
        },
        compoundVariants: [
            {
                variant: 'default',
                enabled: true,
                className: [
                    'bg-tertiary-400',
                    'dark:bg-tertiary-700',
                ]
            },
            {
                variant: 'primary',
                enabled: true,
                className: [
                    'bg-primary-500',
                    'dark:bg-primary-500',
                ]
            },
            {
                variant: 'secondary',
                enabled: true,
                className: [
                    'bg-secondary-500',
                    'dark:bg-secondary-500',
                ]
            },
            {
                variant: ['default', 'primary', 'secondary'],
                enabled: false,
                className: [
                    'bg-tertiary-200',
                    'dark:bg-tertiary-900',
                ]
            }
        ],
        defaultVariants: {
            size: 'default',
            enabled,
            variant: 'default'
        },
    })

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            disabled={disabled}
            className={mergeClasses(toggleContainerStyles({ size, enabled, disabled, variant }))}>
            <span className="sr-only">Enable notifications</span>
            <span className={mergeClasses(toggleHandleStyles({ size, enabled }))} />
        </Switch>
    )
}

export default Toggle