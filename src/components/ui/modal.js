// components
import { Dialog } from "@headlessui/react";

// utils
import { motion, AnimatePresence } from "framer-motion";
import mergeClasses from "@/utils/helpers/mergeClasses";
import { cva } from "class-variance-authority";

const Modal = ({
  title,
  description,
  children,
  isOpen,
  setIsOpen,
  modalActions,
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
            className="fixed inset-0 bg-tertiary-50/80 dark:bg-tertiary-950/80"
            aria-hidden="true"
          />

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center px-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[34rem] overflow-hidden rounded-md border border-tertiary-200 shadow-md dark:border-tertiary-700"
            >
              <div className="flex flex-col gap-6 bg-tertiary-50 p-8 shadow-md dark:bg-tertiary-950">
                {title && (
                  <Dialog.Title className="text-xl font-medium">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description>{description}</Dialog.Description>
                )}
                {/* modal body */}
                {children}
              </div>

              {/* modal footer */}
              {modalActions && (
                <div className="bg-tertiary-50 dark:bg-tertiary-950">
                  <div className="flex items-center justify-between gap-4 border-t border-tertiary-200 bg-tertiary-100 p-4 dark:border-tertiary-700 dark:bg-tertiary-900/50">
                    {modalActions}
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
