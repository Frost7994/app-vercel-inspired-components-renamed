// components
import { Dialog } from '@headlessui/react'

// utils
import { motion, AnimatePresence } from 'framer-motion'
import mergeClasses from '@/utils/helpers/mergeClasses'
import { cva } from 'class-variance-authority'

const Modal = ({
    title,
    description,
    children,
    isOpen,
    setIsOpen,
    modalActions
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    static
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50"
                >

                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-tertiary-50/80 dark:bg-tertiary-950/80" aria-hidden="true" />

                    {/* Full-screen container to center the panel */}
                    <div className="fixed inset-0 flex items-center justify-center px-4">
                        <Dialog.Panel
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className='border border-tertiary-200 dark:border-tertiary-700 shadow-md rounded-md w-full max-w-[34rem] overflow-hidden'>
                            <div className='flex flex-col gap-6 p-8 bg-tertiary-50 dark:bg-tertiary-950 shadow-md'>
                                {title && <Dialog.Title className='text-xl font-medium'>{title}</Dialog.Title>}
                                {description &&
                                    <Dialog.Description>
                                        {description}
                                    </Dialog.Description>
                                }
                                {/* modal body */}
                                {children}
                            </div>

                            {/* modal footer */}
                            {modalActions && <div className='bg-tertiary-50 dark:bg-tertiary-950'>
                                <div className='border-t border-tertiary-200 dark:border-tertiary-700 p-4 gap-4 flex items-center justify-between bg-tertiary-100 dark:bg-tertiary-900/50'>
                                    {modalActions}
                                </div>
                            </div>}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

export default Modal