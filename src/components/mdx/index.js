// base
import { FaGithubAlt } from 'react-icons/fa'
import { BsClipboard } from 'react-icons/bs'

// components
import Link from "next/link"
import Switch from "@/components/ui/switch"
import Button from '@/components/ui/button'
import Drawer from '@/components/ui/drawer'
import { CopyToClipboard } from 'react-copy-to-clipboard';

// utils
import { toast } from 'react-hot-toast'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import clsx from 'clsx'
import { useState } from 'react'

const GithubButton = ({ repo }) => {
    return (
        <Link href={`https://github.com/Frost7994/app-vercel-inspired-components/blob/main/src${repo}`} className='group overflow-hidden no-underline flex border rounded-md border-tertiary-200 dark:border-tertiary-700 w-fit hover:border-tertiary-300 transition-all hover:dark:border-tertiary-600 hover:bg-tertiary-300/25 hover:dark:bg-tertiary-600/25'>
            <div className='p-2 aspect-square bg-tertiary-200 dark:bg-tertiary-700 group-hover:bg-tertiary-300 transition-all group-hover:dark:bg-tertiary-600'>
                <FaGithubAlt className='flex-shrink-0' />
            </div>
            <span className='mx-2'>source</span>
        </Link>
    )
}

const CodeBlock = ({ title, snippet, fit }) => {
    return (
        <div className='not-prose border border-tertiary-200 dark:border-tertiary-800 flex flex-col rounded-md overflow-hidden'>
            <div className='flex items-center gap-4 justify-between p-3 bg-tertiary-200 dark:bg-tertiary-800'>
                <p className='text-sm font-medium'>{title}</p>
                <CopyToClipboard
                    text={snippet}
                    options={{
                        format: 'text/plain'
                    }}
                    onCopy={() => {
                        console.log(snippet)
                        toast.success('Copied to clipboard')
                    }}>
                    <BsClipboard className='text-tertiary-950 dark:text-tertiary-50 cursor-pointer' />
                </CopyToClipboard>
            </div>
            <div className={clsx('bg-tertiary-100 dark:bg-tertiary-900', fit ? 'h-fit' : 'max-h-[400px] overflow-y-scroll scrollbar-hide')}>
                <SyntaxHighlighter language='javascript' style={docco} customStyle={{
                    paddingLeft: '2rem',
                    paddingBottom: '2rem',
                    backgroundColor: 'transparent'
                }}>
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </div >
    )
}

const TableProp = ({ children, type }) => {
    return (
        <div className={
            clsx('not-prose w-fit', type === 'solid' ? 'bg-primary-100 px-2 text-primary-500 dark:bg-primary-800 rounded-md' : 'text-primary-500 font-medium')
        }>
            {children}
        </div>
    )
}

const NoWrap = ({ children }) => {
    return (
        <span className='whitespace-nowrap'>
            {children}
        </span>
    )
}

const ButtonDemonstration = () => {
    // data
    const variants = ['default', 'primary', 'secondary']
    const styles = ['default', 'outline', 'ghost']
    const sizes = ['sm', 'default', 'lg']

    // state
    const [variant, setVariant] = useState('default')
    const [style, setStyle] = useState('default')
    const [size, setSize] = useState('default')
    const [fullWidth, setFullWidth] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)


    return (
        <div className='not-prose'>
            <div className='rounded-md p-3 bg-tertiary-50 dark:bg-tertiary-950 border border-tertiary-200 dark:border-tertiary-700'>
                <p className='text-sm'>View this page on a screen bigger than 640px to use the sandbox.</p>
            </div>
            <div className='gap-6 hidden sm:flex'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <p>Variant:</p>
                        <Switch
                            size='sm'
                            values={variants}
                            active={variant}
                            setActive={setVariant}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p>Size:</p>
                        <Switch
                            size='sm'
                            values={sizes}
                            active={size}
                            setActive={setSize}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p>Style:</p>
                        <Switch
                            size='sm'
                            values={styles}
                            active={style}
                            setActive={setStyle}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p>Full width:</p>
                        <Switch
                            size='sm'
                            values={['true', 'false']}
                            active={fullWidth ? 'true' : 'false'}
                            setActive={(value) => setFullWidth(value === 'true' ? true : false)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p>Disabled:</p>
                        <Switch
                            size='sm'
                            values={['true', 'false']}
                            active={disabled ? 'true' : 'false'}
                            setActive={(value) => setDisabled(value === 'true' ? true : false)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p>Loading:</p>
                        <Switch
                            size='sm'
                            values={['true', 'false']}
                            active={loading ? 'true' : 'false'}
                            setActive={(value) => setLoading(value === 'true' ? true : false)}
                        />
                    </div>
                </div>
                <div className='bg-tertiary-900 flex w-full rounded-md items-center justify-center p-8'>
                    <Button
                        variant={variant}
                        size={size}
                        style={style}
                        disabled={disabled}
                        loading={loading}
                        fullWidth={fullWidth}
                    >Demonstration</Button>
                </div>
            </div>
        </div>
    )
}

const DrawerDemonstration = () => {
    // data
    const directions = ['left', 'right', 'top', 'bottom']

    // state
    const [isOpen, setIsOpen] = useState(false)
    const [direction, setDirection] = useState('left')


    return (
        <div className='not-prose'>
            <div className='flex sm:hidden rounded-md p-3 bg-tertiary-50 dark:bg-tertiary-950 border border-tertiary-200 dark:border-tertiary-700'>
                <p className='text-sm'>View this page on a screen bigger than 640px to use the sandbox.</p>
            </div>
            <div className='gap-6 hidden sm:flex'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <p>Direction:</p>
                        <Switch
                            size='sm'
                            values={directions}
                            active={direction}
                            setActive={setDirection}
                        />
                    </div>

                </div>
                <div className='bg-tertiary-100 dark:bg-tertiary-900 flex w-full rounded-md items-center justify-center p-8'>
                    <Drawer
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        direction={direction}
                    >
                        <p>Hello form drawer</p>
                    </Drawer>
                    <Button
                        size='sm'
                        onClick={() => setIsOpen(true)}
                    >Open Drawer</Button>
                </div>
            </div>
        </div>
    )
}

const allMDXComponents = {
    Switch,
    code: (props) => <code className="before:hidden after:hidden py-1 px-2 rounded-md bg-tertiary-100 shadow dark:bg-tertiary-800" {...props} />,
    h2: (props) => <h2 className="border-b border-tertiary-200 dark:border-tertiary-700 pb-2" {...props} />,
    GithubButton,
    Button,
    CodeBlock,
    TableProp,
    NoWrap,
    ButtonDemonstration,
    DrawerDemonstration
}


export default allMDXComponents
