
// components
import { RadioGroup } from '@headlessui/react'

// utils
import { cva } from 'class-variance-authority'
import mergeClasses from '@/utils/helpers/mergeClasses'
import { v4 as uuidv4 } from 'uuid'

const Switch = ({
    values,
    active,
    setActive,
    size,
    disabled,

}) => {


    let baseToggleStyles = cva([
        'flex',
        'items-center',
        'font-medium',
        'justify-center',
        'px-3',
        'rounded-sm',
        'py-1',
        'capitalize',
        'cursor-pointer',
        'transition-all',
    ], {
        variants: {
            size: {
                sm: [
                    'text-sm'
                ],
                default: [
                    'text-base'
                ],
                lg: [
                    'text-lg'
                ],
            },
            checked: {
                true: [
                    'bg-tertiary-300 dark:bg-tertiary-800',
                    'text-tertiary-950 dark:text-tertiary-50',
                ],
                false: [
                    'bg-tertiary-50 dark:bg-tertiary-950',
                    'text-tertiary-400 dark:text-tertiary-500',
                    'hover:text-tertiary-950 hover:dark:text-tertiary-50',
                ]
            },
            disabled: {
                true: [
                    'pointer-events-none',
                ]
            }
        },
        defaultVariants: {
            size: 'default',
            checked: false,
            disabled: false,
        },
    })

    return (
        <RadioGroup
            disabled={disabled}
            value={active}
            onChange={setActive}
            className='flex items-center border w-fit border-tertiary-200 bg-tertiary-50 dark:border-tertiary-700 dark:bg-tertiary-950 p-1 rounded-md'>
            {values.map((toggle) => (
                <RadioGroup.Option
                    key={uuidv4()}
                    value={toggle}>
                    {({ checked }) => (
                        <span className={mergeClasses(baseToggleStyles({ size, checked, disabled }))}>{toggle}</span>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    )
}

export default Switch