// state
import { useState, useEffect } from 'react'

// components
import NextNProgress from 'nextjs-progressbar'
import Layout from '@/components/layout/layout'
import Toaster from '@/components/layout/toaster'

// providers
import { ThemeProvider } from 'next-themes'

// utils
import { useRouter } from 'next/router'

// styling
import '@/styles/globals.css'
import '@/styles/prism.css'

export default function App({ Component, pageProps }) {
  // state
  const [mounted, setMounted] = useState(false)

  // effects
  useEffect(() => setMounted(true), [])

  // router destructure
  const { pathname } = useRouter()

  // render - avoids hydration misnatch due to next-themes
  if (!mounted) return null;

  // render - if pathname is not root, render with layout
  if (pathname !== '/') {
    return (
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Layout>
          <Toaster />
          <NextNProgress
            color="var(--primary-500)"
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>)
  }

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Toaster />
      <NextNProgress
        color="var(--primary-500)"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

