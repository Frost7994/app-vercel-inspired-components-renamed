// components
import { MDXRemote } from "next-mdx-remote";
import allMDXComponents from "@/components/mdx";
import Head from "@/components/layout/head";
import MDXHeader from "@/components/mdx/mdxHeader";
import MDXFooter from "@/components/mdx/mdxFooter";
import MDXBody from "@/components/mdx/mdxBody";

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
        <>
            {/* custom head -- Apex | title */}
            <Head title={`${data.title}`}></Head>
            {/* mdx header */}
            <MDXHeader data={data} />
            {/* mdx wrapper to apply prose styling */}
            <MDXBody>
                {/* mdx rendered */}
                <MDXRemote
                    {...content}
                    components={allMDXComponents}
                    scope={{
                        // state will go here
                        store,
                    }} />
            </MDXBody>
            {/* mdx footer */}
            <MDXFooter
                previousCrumb={previousCrumb}
                nextCrumb={nextCrumb}
            />
        </>
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
                name: file.replace(".mdx", "").replace("-", " "),
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