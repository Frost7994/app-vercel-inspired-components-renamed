import { useState } from 'react'

import Button from '@/components/ui/button'
import Drawer from '@/components/ui/drawer'

const Page = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} direction='right'>Hello from the drawer</Drawer>

            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        </div>
    )
}

export default Page