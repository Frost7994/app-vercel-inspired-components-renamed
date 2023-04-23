// components
import { Popover as PopoverRoot } from "@headlessui/react"

// utils
import { baseButtonStyles } from "@/components/ui/button"
import mergeClasses from "@/utils/helpers/mergeClasses"
import { cva } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"

const Popover = ({
    children,
    btnLabel,
    btnSize,
    btnVariant,
    btnStyle,
    position = 'left',
    panelClassName,
    btnClassName
}) => {
    let basePopoverPanelStyles = cva([
        'absolute',
        'z-10',
        'shadow-md',
        'bg-tertiary-50',
        'dark:bg-tertiary-950',
        'border',
        'border-tertiary-700',
        'dark:border-tertiary-200',
        'rounded-md',
        'p-4',
        'mt-2',
    ], {
        variants: {
            position: {
                left: [
                    'left-0',
                ],
                right: [
                    'right-0',
                ]
            }
        },
        defaultVariants: {
            position: 'left'
        }
    })

    return (
        <div className="flex">
            <PopoverRoot className="relative">
                {({ open }) => (
                    <>
                        <PopoverRoot.Button className={mergeClasses(baseButtonStyles({
                            size: btnSize,
                            style: btnStyle,
                            variant: btnVariant,
                        }), btnClassName)}>{btnLabel}</PopoverRoot.Button>
                        <AnimatePresence>
                            {open && (
                                <PopoverRoot.Panel
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    static
                                    className={mergeClasses(basePopoverPanelStyles({ position }), panelClassName)}>
                                    {children}
                                </PopoverRoot.Panel>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </PopoverRoot>
        </div>
    )
}

export default Popover