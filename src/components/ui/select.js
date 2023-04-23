// utils
import { Fragment } from 'react'

// base
import { HiOutlineChevronDown, HiCheck } from 'react-icons/hi'

// components
import { Listbox } from '@headlessui/react'

// utils
import { cva } from 'class-variance-authority'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'



const Select = ({
    options,
    selected,
    setSelected,
    variant = 'default',
    size,
    disabled = false
}) => {

    const baseListboxStyles = cva([
        'flex-shrink-0'
    ], {
        variants: {
            size: {
                sm: ['w-40'],
                default: ['w-48'],
                lg: ['w-64'],
                fit: ['w-fit'],
                full: ['flex-1']
            },
            disabled: {
                true: [
                    'disabled:pointer-events-none',
                ]
            }
        },
        defaultVariants: {
            size: 'default',
            disabled: false
        }
    })

    const baseListboxButtonStyles = cva([
        'relative',
        'w-full',
        'cursor-default',
        'rounded-md',
        'border',
        'py-2',
        'pl-3',
        'pr-10',
        'text-left',
        'shadow-md',
        'focus:outline-none',
        'focus-visible:border-indigo-500',
        'focus-visible:ring-2',
        'focus-visible:ring-white',
        'focus-visible:ring-opacity-75',
        'focus-visible:ring-offset-2',
        'focus-visible:ring-offset-orange-300'
    ], {
        variants: {
            size: {
                sm: ['text-sm'],
                default: ['text-base'],
                lg: ['text-lg'],
            },
            disabled: {
                true: [
                    'bg-tertiary-100',
                    'text-tertiary-300',
                    'border-tertiary-200',
                    'dark:bg-tertiary-900',
                    'dark:text-tertiary-700',
                    'dark:border-tertiary-700',
                ],
                false: [
                    'bg-tertiary-50',
                    'border-tertiary-200',
                    'dark:bg-tertiary-950',
                    'dark:border-tertiary-700',
                ]
            }
        },
        defaultVariants: {
            size: 'default',
            disabled: false

        }
    })

    const baseListboxOptionStyles = cva([
        'relative cursor-default select-none py-2 pl-10 pr-4'
    ], {
        variants: {
            size: {
                sm: ['text-sm'],
                default: ['text-base'],
                lg: ['text-lg'],
            }
        },
        compoundVariants: [
            {
                active: true,
                variant: 'default',
                className: [
                    'bg-tertiary-200',
                    'dark:bg-tertiary-700',
                ]
            },
            {
                active: true,
                variant: 'primary',
                className: [
                    'bg-primary-100',
                    'text-primary-500',
                    'dark:bg-primary-800',
                ]
            },
            {
                active: true,
                variant: 'secondary',
                className: [
                    'bg-secondary-100',
                    'text-secondary-500',
                    'dark:bg-secondary-800',
                ]
            }
        ],
        defaultVariants: {
            variant: 'default',
            size: 'default'

        }
    })

    const baseListboxIconStyles = cva([
        'absolute',
        'inset-y-0',
        'left-0',
        'flex',
        'items-center',
        'pl-3',
    ], {
        variants: {
            variant: {
                default: 'text-tertiary-950 dark:text-tertiary-50',
                primary: 'text-primary-500',
                secondary: 'text-secondary-500',
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    })

    return (
        <div className={baseListboxStyles({ size, disabled })}>
            <Listbox value={selected} onChange={setSelected} disabled={disabled}>
                {({ open }) => (
                    <div className="relative">
                        <Listbox.Button
                            className={baseListboxButtonStyles({ size, disabled })}>
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <HiOutlineChevronDown
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <AnimatePresence>
                            {open && (
                                <Listbox.Options
                                    static
                                    as={motion.ul}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="z-10 border scrollbar-hide border-tertiary-200 dark:border-tertiary-700 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-tertiary-50 dark:bg-tertiary-950 py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            as={Fragment}
                                            value={person}>
                                            {({ active, selected }) => (
                                                <li className={baseListboxOptionStyles({ variant, active, size })}>
                                                    <span
                                                        className={clsx('block truncate', selected ? 'font-medium' : 'font-normal')}>
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className={baseListboxIconStyles({ variant, size })}>
                                                            <HiCheck aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </Listbox>
        </div>
    )
}

export default Select