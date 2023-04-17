// base
import { FaGithubAlt } from 'react-icons/fa'
import { BsClipboard } from 'react-icons/bs'

// components
import Link from "next/link"
import Switch from "@/components/ui/switch"
import Button from '@/components/ui/button'
import { CopyToClipboard } from 'react-copy-to-clipboard';

// utils
import { toast } from 'react-hot-toast'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import clsx from 'clsx'
import useMDXStore from '@/store/useMDXStore'
import { useState } from 'react'

const GithubButton = ({ }) => {
    return (
        <Link href={`https://github.com/`} className='group overflow-hidden no-underline flex border rounded-md border-tertiary-200 dark:border-tertiary-700 w-fit hover:border-tertiary-300 transition-all hover:dark:border-tertiary-600 hover:bg-tertiary-300/25 hover:dark:bg-tertiary-600/25'>
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
    const [variant, setVariant] = useState('default')
    const variants = ['default', 'primary', 'secondary']

    return (
        <div className='flex not-prose flex-col gap-4 my-8 p-4 bg-tertiary-100 dark:bg-tertiary-800 rounded-md shadow-[inset_1px_3px_4px_0px] shadow-tertiary-300 dark:shadow-tertiary-900'>
            <div className='flex justify-end'>
                <div className='rounded-md shadow-md shadow-tertiary-300 dark:shadow-tertiary-900'>
                    <Switch
                        size='sm'
                        values={variants}
                        active={variant}
                        setActive={setVariant} />
                </div>
            </div>
            <div className='flex flex-col border-b pb-2 border-tertiary-200 dark:border-tertiary-700'>
                <p className='underline'>Default buttons</p>
                <div className='flex items-center gap-2'>
                    <Button variant={variant} size='sm'>Small</Button>
                    <Button variant={variant}>Default</Button>
                    <Button variant={variant} size='lg'>Large</Button>
                    <Button variant={variant} disabled>Disabled</Button>
                    <Button variant={variant} loading>Loading</Button>
                    <Button variant={variant} fullWidth>Full Width</Button>
                </div>
            </div>
            <div className='flex flex-col border-b pb-2 border-tertiary-200 dark:border-tertiary-700'>
                <p className='underline'>Outline buttons</p>
                <div className='flex items-center gap-2'>
                    <Button style='outline' variant={variant} size='sm'>Small</Button>
                    <Button style='outline' variant={variant}>Outline</Button>
                    <Button style='outline' variant={variant} size='lg'>Large</Button>
                    <Button style='outline' variant={variant} disabled>Disabled</Button>
                    <Button style='outline' variant={variant} loading>Loading</Button>
                    <Button style='outline' variant={variant} fullWidth>Full Width</Button>
                </div>
            </div>
            <div className='flex flex-col border-b pb-2 border-tertiary-200 dark:border-tertiary-700'>
                <p className='underline'>Ghost buttons</p>
                <div className='flex items-center gap-2'>
                    <Button style='ghost' variant={variant} size='sm'>Small</Button>
                    <Button style='ghost' variant={variant}>Ghost</Button>
                    <Button style='ghost' variant={variant} size='lg'>Large</Button>
                    <Button style='ghost' variant={variant} disabled>Disabled</Button>
                    <Button style='ghost' variant={variant} loading>Loading</Button>
                    <Button style='ghost' variant={variant} fullWidth>Full Width</Button>
                </div>
            </div>
        </div >
    )
}

const allMDXComponents = {
    Switch,
    code: (props) => <code className="before:hidden after:hidden py-1 px-2 rounded-md bg-tertiary-100 shadow dark:bg-tertiary-800" {...props} />,
    GithubButton,
    Button,
    CodeBlock,
    TableProp,
    NoWrap,
    ButtonDemonstration
}


export default allMDXComponents
