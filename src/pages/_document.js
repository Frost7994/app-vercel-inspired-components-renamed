import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='text-tertiary-950 bg-tertiary-50 dark:text-tertiary-50 dark:bg-tertiary-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
