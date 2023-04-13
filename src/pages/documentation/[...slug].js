// state
import { useEffect } from "react";

// components
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

const Documentation = ({ data, content }) => {
    // store detructure
    const store = useMDXStore();

    // effects - set initial state
    useEffect(() => {
        if (data.toggle) {
            store.setSwitchActive(data.toggleValues[0])

        }
        //    eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="">
            {/* mdx header */}
            <div className="flex flex-col gap-4">
                {/* data */}
                <div className="flex flex-col">
                    <div className="">
                        <p className="truncate whitespace-normal text-tertiary-400 dark:text-tertiary-500">
                            <span className=" text-sm sm:text-base md:text-lg font-medium text-primary-500">{data.tag}</span>
                            <span className="text-xs sm:text-sm md:text-base text-tertiary-400 mx-1 md:mx-2 dark:text-tertiary-500">•</span>
                            <span className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500">{data.readingTime}</span>
                            <span className="text-xs sm:text-sm md:text-base text-tertiary-400 mx-1 md:mx-2 dark:text-tertiary-500">•</span>
                            <span className="text-xs sm:text-sm md:text-base text-tertiary-400 dark:text-tertiary-500">Last updated on {data.date}</span>
                        </p>
                    </div>
                    <h1 className="text-3xl sm:text-3xl md:text-4xl mb-2 font-bold">{data.title}</h1>
                    <p className="text-base sm:text-lg text-tertiary-400 dark:text-tertiary-500">{data.description}</p>
                </div>
                {/* toggle */}
                {data.toggle &&
                    <div className="flex flex-col">
                        <p className="text-tertiary-400 text-xs sm:text-sm md:text-base dark:text-tertiary-500 font-medium mb-1">Change the styling of the components below:</p>
                        <Switch
                            size='sm'
                            values={data.toggleValues}
                            active={store.switchActive}
                            setActive={store.setSwitchActive}
                        />
                    </div>
                }
            </div>

            <div className="prose flex flex-col w-full prose-blockquote:border-secondary-500 prose-code:hljs max-w-none prose-md prose-p:mt-2 mt-4 dark:prose-invert px-4 prose-h1:mt-8 prose-h1:mb-0 prose-h2:mt-8 prose-h2:mb-2  prose-pre:bg-[#18191b] prose-code:text-tertiary-300 ">
                <MDXRemote
                    {...content}
                    components={allMDXComponents}
                    scope={{
                        // state will go here
                        store,
                    }} />
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

    return {
        props: {
            data: {
                ...data,
                readingTime: readingTime(content).text,
            },
            content: mdxSource,
        }
    }
}