// base
import { FaGithubAlt } from 'react-icons/fa'

// components
import Link from "next/link"
import Switch from "@/components/ui/switch"
import Button from '@/components/ui/button'


const GithubButton = ({ repo }) => {
    return (
        <Link href={`https://github.com/`} className='group overflow-hidden no-underline flex border rounded-md border-tertiary-200 dark:border-tertiary-700 w-fit hover:border-tertiary-300 transition-all hover:dark:border-tertiary-600 hover:bg-tertiary-300/25 hover:dark:bg-tertiary-600/25'>
            <div className='p-2 aspect-square bg-tertiary-200 dark:bg-tertiary-700 group-hover:bg-tertiary-300 transition-all group-hover:dark:bg-tertiary-600'>
                <FaGithubAlt className='flex-shrink-0' />
            </div>
            <span className='mx-2'>source</span>
        </Link>
    )

}

const allMDXComponents = {
    Switch,
    code: (props) => <code className="before:hidden after:hidden py-1 px-2 rounded-md" {...props} />,
    GithubButton,
    Button,
}


export default allMDXComponents