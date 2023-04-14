import fs from 'fs'

const Test = () => {
    return (
        <div>
            test
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
                    name: file.replace('.mdx', ''),
                    // remove file extension
                    href: `/documentation/${folder}/${file.replace(/\.[^/.]+$/, '')}`
                }
            })
        }
    })

    return {
        props: {}
    }
}
