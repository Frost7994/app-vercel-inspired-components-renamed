// components
import { Dialog } from "@headlessui/react"

// utils
import { motion, AnimatePresence } from "framer-motion"
import { cva } from "class-variance-authority"
import mergeClasses from "@/utils/helpers/mergeClasses"

const Drawer = ({ isOpen, setIsOpen, direction, children, className }) => {
    // variant for direction
    const directionVariant = {
        hidden: (direction) => ({
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0%',
            y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : '0%'
        }),
        visible: {
            x: 0,
            y: 0,
        },
    }

    let baseDrawerStyles = cva([
        'absolute',
        'p-8',
        'bg-tertiary-50 dark:bg-tertiary-950',
        'shadow-md'
    ], {
        variants: {
            direction: {
                left: [
                    'h-full',
                    'top-0',
                    'left-0',
                    'border-r',
                    'border-tertiary-200 dark:border-tertiary-700',
                ],
                right: [
                    'h-full',
                    'top-0',
                    'right-0',
                    'border-l',
                    'border-tertiary-200 dark:border-tertiary-700',
                ],
                top: [
                    'w-full',
                    'top-0',
                    'inset-x-0',
                    'border-b',
                    'border-tertiary-200 dark:border-tertiary-700',
                ],
                bottom: [
                    'w-full',
                    'bottom-0',
                    'inset-x-0',
                    'border-t',
                    'border-tertiary-200 dark:border-tertiary-700',
                ],
            },
        },
        defaultVariants: {
            direction: 'left',
        },
    })

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    static
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50">

                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                        className="fixed inset-0 bg-tertiary-50/80 dark:bg-tertiary-950/80" aria-hidden="true" />

                    {/* Full-screen container to center the panel */}
                    <div className="fixed inset-0">
                        <Dialog.Panel
                            variants={directionVariant}
                            as={motion.div}
                            custom={direction}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className={mergeClasses(baseDrawerStyles({ direction }), className)}
                        >
                            {children}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

export default Drawer