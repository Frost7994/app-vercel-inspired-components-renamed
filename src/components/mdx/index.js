// mdx ui components
import GithubButton from '@/components/mdx/ui/githubButton'
import CodeBlock from '@/components/mdx/ui/codeBlock'
import TableProp from '@/components/mdx/ui/tableProp'
import NoWrap from '@/components/mdx/ui/noWrap'

// mdx demonstration components
import ButtonDemonstration from '@/components/mdx/demonstration/buttonDemonstration'
import DrawerDemonstration from '@/components/mdx/demonstration/drawerDemonstration'






const allMDXComponents = {
    code: (props) => <code className="before:hidden after:hidden py-1 px-2 rounded-md bg-tertiary-100 shadow dark:bg-tertiary-800" {...props} />,
    h2: (props) => <h2 className="border-b border-tertiary-200 dark:border-tertiary-700 pb-2" {...props} />,
    GithubButton,
    CodeBlock,
    TableProp,
    NoWrap,
    ButtonDemonstration,
    DrawerDemonstration
}


export default allMDXComponents
