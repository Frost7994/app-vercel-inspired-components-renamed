// components
import { MDXRemote } from "next-mdx-remote";
import allMDXComponents from "@/components/mdx";

// utils
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";

const Documentation = ({ data, content }) => {

    console.log(data)

    return (
        <div className="prose flex flex-col w-full prose-blockquote:border-secondary-500 prose-code:hljs max-w-none prose-md prose-p:mt-2 mt-4 prose-invert px-4 prose-h1:mt-8 prose-h1:mb-0 prose-h2:mt-8 prose-h2:mb-2  prose-pre:bg-[#18191b] prose-code:text-tertiary-300 ">
            <MDXRemote
                {...content}
                components={allMDXComponents}
                scope={{
                    // state will go here
                }} />
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
    let folder = params.slug[0];
    let file = params.slug[1];

    const fileContents = fs.readFileSync(path.join(`src/data/documentation/${folder}/${file}.mdx`), "utf8");
    const { data, content } = matter(fileContents);

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