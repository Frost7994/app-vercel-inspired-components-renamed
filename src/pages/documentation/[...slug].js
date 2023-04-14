// components
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import allMDXComponents from "@/components/mdx";
import Switch from "@/components/ui/switch";

// utils
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import useMDXStore from "@/store/useMDXStore";

const Documentation = ({ data, content, breadcrumbs, currentCrumb }) => {
    // store detructure
    const store = useMDXStore();

    // get the previous and next page
    const currentCrumbIndex = breadcrumbs.findIndex((crumb) => crumb.name === currentCrumb);
    const previousCrumb = breadcrumbs[currentCrumbIndex - 1];
    const nextCrumb = breadcrumbs[currentCrumbIndex + 1];

    return (
        <div className="">
            {/* mdx header */}
            <div className="flex flex-col gap-4">
                {/* data */}
                <div className="flex flex-col">
                    <p className="truncate text-xs sm:text-sm text-tertiary-400 dark:text-tertiary-500">
                        <span className="font-medium text-sm sm:text-base text-primary-500">{data.tag}</span>
                        <span className="mx-1 md:mx-2">•</span>
                        <span>{data.readingTime}</span>
                        <span className="mx-1 md:mx-2">•</span>
                        <span className="mr-1 hidden sm:inline-block">Last updated on</span>
                        <span>{data.date}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl mb-2 font-bold">{data.title}</h1>
                        {/* toggle */}
                        {data.toggle &&
                            <div className="flex flex-col sm:items-end">
                                <p className="text-tertiary-400 text-xs dark:text-tertiary-500 font-medium mb-1">Change the styling of the components below:</p>
                                <Switch
                                    size='sm'
                                    values={data.toggleValues}
                                    active={store.switchActive}
                                    setActive={store.setSwitchActive}
                                />
                            </div>
                        }
                    </div>
                </div>

            </div>

            {/* docs */}
            <div className="prose prose-code:hljs flex flex-col w-full prose-blockquote:border-secondary-500 max-w-none prose-md prose-p:mt-2 mt-4 dark:prose-invert px-4 prose-h1:mt-8 prose-h1:mb-0 prose-h2:mt-8 prose-h2:mb-2 prose-pre:dark:!bg-tertiary-900 prose-code:bg-tertiary-900 prose-code:text-tertiary-300">
                <MDXRemote
                    {...content}
                    components={allMDXComponents}
                    scope={{
                        // state will go here
                        store,
                    }} />
            </div>

            {/* links */}
            <div className="mt-6 flex items-center gap-2 justify-between">
                {/* previous */}
                {previousCrumb ? (
                    <div className="flex flex-col items-start">
                        <p className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500 font-medium mb-1">Previous</p>
                        <Link
                            href={`${previousCrumb.href}`}
                            className="text-primary-500 font-medium capitalize transition-all hover:text-primary-600">
                            {previousCrumb.name}
                        </Link>
                    </div>
                ) : (
                    <div />
                )}
                {/* next */}
                {nextCrumb ? (
                    <div className="flex flex-col items-end">
                        <p className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500 font-medium mb-1">Next</p>
                        <Link
                            href={`${nextCrumb.href}`}
                            className="text-primary-500 font-medium capitalize transition-all hover:text-primary-600">
                            {nextCrumb.name}
                        </Link>
                    </div>
                ) : (
                    <div />
                )}
            </div>
        </div>
    )
}

export default Documentation

export const getStaticPaths = async () => {
    // folders
    const folders = fs.readdirSync(path.join("src/data/documentation"));

    const documentation = folders.map((folder) => {
        return fs.readdirSync(path.join("src/data/documentation", folder)).map((file) => {
            // remove file extension and add folder to slug
            const slug = `/${folder}/${file.replace(".mdx", "")}`

            const fileContents = fs.readFileSync(path.join("src/data/documentation", folder, file), "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                data
            }
        })
    })

    const paths = documentation.flat().map((doc) => ({ params: { slug: doc.slug.split("/").slice(1) } }))


    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    // get folder from params
    let folder = params.slug[0];

    // get file from params
    let file = params.slug[1];

    // get file contents
    const fileContents = fs.readFileSync(path.join(`src/data/documentation/${folder}/${file}.mdx`), "utf8");
    const { data, content } = matter(fileContents);

    // serialize mdx
    const mdxSource = await serialize(content, { mdxOptions: { rehypePlugins: [rehypePrism] } })

    // folders
    const folders = ['getting-started', 'components', 'utilities']

    // breadcrumbs 
    const breadcrumbs = folders.map((folder) => {
        return fs.readdirSync(path.join("src/data/documentation", folder)).map((file) => {
            return {
                name: file.replace(".mdx", ""),
                href: `/documentation/${folder}/${file.replace(".mdx", "")}`
            }
        })
    })

    return {
        props: {
            data: {
                ...data,
                readingTime: readingTime(content).text,
            },
            content: mdxSource,
            breadcrumbs: breadcrumbs.flat(),
            currentCrumb: file
        }
    }
}