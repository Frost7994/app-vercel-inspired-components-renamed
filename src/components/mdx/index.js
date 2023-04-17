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

const CodeBlock = ({ title, snippet }) => {
    return (
        <div className='not-prose border border-tertiary-200 dark:border-tertiary-800 flex flex-col rounded-md overflow-hidden'>
            <div className='flex items-center gap-4 justify-between p-3 bg-tertiary-200 dark:bg-tertiary-800'>
                <p className='text-sm font-medium'>HTTP Status Code</p>
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
            <div className='bg-tertiary-100 dark:bg-tertiary-900'>
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



const allMDXComponents = {
    Switch,
    code: (props) => <code className="before:hidden after:hidden py-1 px-2 rounded-md bg-tertiary-100 shadow dark:bg-tertiary-800" {...props} />,
    GithubButton,
    Button,
    CodeBlock,
    TableProp,
    NoWrap
}


export default allMDXComponents
