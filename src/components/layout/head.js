import HeadWrapper from 'next/head'

const Head = ({ children, title }) => {
    return (
        <HeadWrapper>
            <title>Apex | {title}</title>
            {children}
        </HeadWrapper>
    )
}

export default Head