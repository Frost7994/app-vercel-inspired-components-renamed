// components
import Link from "next/link"

// utils
import { baseButtonStyles } from "@/components/ui/button"
import mergeClasses from "@/utils/helpers/mergeClasses"

const Home = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center p-8'>
      <div className='flex flex-col gap-4'>
        {/* logo */}
        <div className='flex gap-4 flex-wrap'>
          <div className='flex flex-shrink-0 items-center aspect-square p-3 justify-center border-4 rounded-md'>
            <p className='text-5xl'>AU</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-6xl'>Apex<span className='text-primary-500'>UI</span></h1>
            <p className='text-xl whitespace-normal'>
              A React UI library for building modern web apps
            </p>
          </div>
        </div>
        <Link className={mergeClasses(baseButtonStyles(), 'text-center')} href='/documentation/overview/introduction'>Go To Documentation</Link>
      </div>
    </div>
  )
}

export default Home