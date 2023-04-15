import fs from 'fs'
import { useState } from 'react'
import Button from '@/components/ui/button'
import Switch from '@/components/ui/switch'

const Test = ({ breadcrumbs }) => {
    // state
    const [variant, setVariant] = useState('default')

    const variants = ['default', 'primary', 'secondary']

    return (
        <div className='flex flex-col gap-4'>
            <Switch
                values={variants}
                active={variant}
                setActive={setVariant}
            />
            {/* {JSON.stringify(breadcrumbs)} */}
            <div className='flex items-center gap-4'>
                <Button variant={variant} size='sm'>Default sm</Button>
                <Button variant={variant}>Default</Button>
                <Button variant={variant} size='lg'>Default lg</Button>
                <Button variant={variant} disabled> Default disabled</Button>
                <Button variant={variant} loading>Default loading</Button>
                <Button variant={variant} fullWidth>full width</Button>
            </div>
            <div className='flex items-center gap-4'>
                <Button variant={variant} style='ghost' size='sm'>Ghost sm</Button>
                <Button variant={variant} style='ghost'>Ghost</Button>
                <Button variant={variant} style='ghost' size='lg'>Ghost lg</Button>
                <Button variant={variant} style='ghost' disabled>Ghost disabled</Button>
                <Button variant={variant} style='ghost' loading>Ghost loading</Button>
                <Button variant={variant} style='ghost' fullWidth>Ghost full width</Button>
            </div>
            <div className='flex items-center gap-4'>
                <Button variant={variant} style='outline' size='sm'>Outline sm</Button>
                <Button variant={variant} style='outline'>Outline</Button>
                <Button variant={variant} style='outline' size='lg'>Outline lg</Button>
                <Button variant={variant} style='outline' disabled>Outline disabled</Button>
                <Button variant={variant} style='outline' loading>Outline loading</Button>
                <Button variant={variant} style='outline' fullWidth>Outline full width</Button>
            </div>
        </div>
    )
}

export default Test

//+-- This outputs the correct breadcrumb structure
//+-- required for the sidebar navigation to be saved
//+-- in the data folder unti data fetching in the 
//+-- layout component is implemented

export const getServerSideProps = async () => {
    // folders
    const folders = ['getting-started', 'components', 'utilities']

    // breadcrumbs
    const breadcrumbs = folders.map(folder => {
        return {
            // replace all '-' with ' '
            name: folder.replace(/-/g, ' '),
            // get all files in folder
            crumbs: fs.readdirSync(`./src/data/documentation/${folder}`).map(file => {
                return {
                    // replace mdx
                    name: file.replace('.mdx', '').replace(/-/g, ' '),
                    // remove file extension
                    href: `/documentation/${folder}/${file.replace(/\.[^/.]+$/, '')}`
                }
            })
        }
    })

    console.log(breadcrumbs)

    return {
        props: { breadcrumbs }
    }
}
