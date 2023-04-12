// components
import Link from "next/link"

// utils
import { useTheme } from "next-themes"

const Home = () => {
  // theme destructure
  const { theme, setTheme } = useTheme()

  // is dark mode
  const isDark = theme === "dark"

  return (
    <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center"
      style={{
        backgroundImage: "url('hexagon.svg')",
      }}
    >
      {/* bg radial gradient */}
      <div
        className="absolute top-0 left-0 h-full w-full opacity-80"
        style={{
          backgroundImage: `radial-gradient(var(${isDark ? "--slate-800" : "--slate-200"
            }) 20%, transparent 20%), radial-gradient(var(${isDark ? "--slate-800" : "--slate-200"}) 20%, transparent 20%)`,
          backgroundPosition: "0 0, 50px 50px",
          backgroundSize: "10px 10px",
        }}
      />
      {/* bg fade */}
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-gradient-radial from-transparent to-tertiary-50 dark:to-tertiary-950" />

      <div className="flex flex-col items-center relative">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-4xl font-medium">Component</h1>
          <div className="bg-gradient-to-l from-primary-500 to-secondary-500 p-0.5 rounded-md">
            <div className="p-2 bg-tertiary-950 rounded-md aspect-square flex items-center justify-center">
              <h1 className="text-4xl leading-9 font-medium text-transparent bg-gradient-to-l from-primary-500 to-secondary-500 bg-clip-text">UI</h1>
            </div>
          </div>
        </div>
        <p className="text-2xl text-center max-w-screen-sm mb-8">An open sourced project built with RadixUI, HeadlessUI, TailwindCSS and Framer Motion.</p>
        <div className="relative">
          <div className="bg-gradient-to-l from-primary-500 absolute to-secondary-500 w-64 h-14 blur-3xl opacity-50" />
          <div className="relative h-12 w-56 rounded-md bg-gradient-to-l from-primary-500 to-secondary-500 p-[1px]">
            <Link href='/documentation/getting-started/overview' className="w-full h-full items-center justify-center flex rounded-md bg-tertiary-950">
              <p className="font-medium bg-clip-text">Get Started Today</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home