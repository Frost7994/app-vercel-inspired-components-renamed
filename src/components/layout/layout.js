// state
import { useState } from 'react'

// base
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'

// components
import { Dialog } from '@headlessui/react'
import Switch from "@/components/ui/switch"

// utils
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const Layout = ({ children }) => {
    // state
    let [isOpen, setIsOpen] = useState(false)

    // destructuring theme and setTheme from useTheme hook
    let { theme, setTheme } = useTheme()

    // router destructure - use router to get the current path and all paths in the url
    let { pathname } = useRouter()
    let urlPaths = pathname.split('/')
    let path = urlPaths[urlPaths.length - 1]
    let paths = urlPaths.filter(path => path !== '').map((p, i) => ({
        // name: replace all '-' with ' '
        name: p.replace(/-/g, ' '),
        // href: join all paths before and including the current path
        href: `/${urlPaths.slice(1, i + 2).join('/')}`
    }))

    return (
        <div className="flex flex-col h-screen w-screen">
            {/* mobile menu */}
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
                            className="fixed inset-0 bg-tertiary-50/80 dark:bg-tertiary-950/50" aria-hidden="true" />

                        {/* Full-screen container to center the panel */}
                        <div className="fixed inset-0">
                            <Dialog.Panel
                                as={motion.div}
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className='h-full bg-tertiary-50 dark:bg-tertiary-900 w-64 shadow-md pl-8 pr-4'>
                                <div className='flex items-center justify-between h-14 border-b border-transparent'>
                                    <Dialog.Title className='text-xl font-medium'>Component<span className='text-primary-500'>UI</span></Dialog.Title>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className='p-1 rounded-md border-2 border-tertiary-200 dark:border-tertiary-700'>
                                        <AiOutlineClose className='h-4 w-4 text-tertiary-400 dark:text-tertiary-700' />
                                    </button>
                                </div>
                                <Dialog.Description>
                                    This will permanently deactivate your account
                                </Dialog.Description>

                                <p>
                                    Are you sure you want to deactivate your account? All of your data
                                    will be permanently removed. This action cannot be undone.
                                </p>

                                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
            {/* nav */}
            <div className="w-full h-14 flex items-center justify-between px-4 md:px-8 border-b border-tertiary-200 dark:border-tertiary-700">
                <p className="text-xl font-medium">Component<span className="text-primary-500">UI</span></p>
                <Switch
                    values={['light', 'dark']}
                    active={theme}
                    setActive={setTheme}
                    size='sm'
                />
            </div>
            {/* subnav */}
            <div className="w-full h-14 flex items-center gap-4 px-4 md:px-8 border-b border-tertiary-200 dark:border-tertiary-700">
                {/* button for sidenav - visible at less than lg */}
                <button
                    onClick={() => setIsOpen(true)}
                    className='block lg:hidden p-1 rounded-md border-2 border-tertiary-200 dark:border-tertiary-700'>
                    <HiOutlineMenu className='h-5 w-5 text-tertiary-400 dark:text-tertiary-500' />
                </button>
                {/* breadcrumb */}
                <ul className='min-w-0 flex text-sm md:text-base'>
                    {paths.map((p, i) => (
                        <li key={i} className='flex items-center truncate'>
                            <p className={clsx('truncate capitalize', i !== paths.length - 1 ? 'text-tertiary-400 dark:text-tertiary-500' : 'text-primary-500 font-medium')}>{p.name}</p>
                            {i !== paths.length - 1 && <BsChevronRight className='h-3 w-3 mx-3 flex-shrink-0 text-tertiary-400 dark:text-tertiary-500' />}
                        </li>
                    ))}
                </ul>
            </div>
            {/* body */}
            <div className="flex h-[calc(100%-112px)]">
                {/* sidenav */}
                <div className="hidden lg:flex flex-col flex-shrink-0 w-64 border-r border-tertiary-200 dark:border-tertiary-700"></div>
                {/* main */}
                <div className="p-8">{children}</div>
            </div>
        </div>
    )
}

export default Layout