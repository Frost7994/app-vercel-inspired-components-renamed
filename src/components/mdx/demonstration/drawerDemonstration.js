// state
import { useState } from "react"

// components
import Button from "@/components/ui/button"
import RadioGroup from "@/components/ui/radioGroup"
import Drawer from "@/components/ui/drawer"

const DrawerDemonstration = () => {
    // data
    const directions = ['left', 'right', 'top', 'bottom']

    // state
    const [isOpen, setIsOpen] = useState(false)
    const [direction, setDirection] = useState('left')


    return (
        <div className='not-prose'>
            <div className='flex sm:hidden rounded-md p-3 bg-tertiary-50 dark:bg-tertiary-950 border border-tertiary-200 dark:border-tertiary-700'>
                <p className='text-sm'>View this page on a screen bigger than 640px to use the sandbox.</p>
            </div>
            <div className='gap-6 hidden sm:flex'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <p>Direction:</p>
                        <RadioGroup
                            size='sm'
                            values={directions}
                            active={direction}
                            setActive={setDirection}
                        />
                    </div>

                </div>
                <div className='bg-tertiary-100 dark:bg-tertiary-900 flex w-full rounded-md items-center justify-center p-8'>
                    <Drawer
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        direction={direction}
                    >
                        <p>Hello form drawer</p>
                    </Drawer>
                    <Button
                        size='sm'
                        onClick={() => setIsOpen(true)}
                    >Open Drawer</Button>
                </div>
            </div>
        </div>
    )
}

export default DrawerDemonstration