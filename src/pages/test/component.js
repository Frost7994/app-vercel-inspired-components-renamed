import Toggle from "@/components/ui/toggle"
import { useState } from "react"

const Component = () => {

    const [enabled, setEnabled] = useState(false)
    return (
        <div className="flex gap-4">
            <Toggle size='sm' enabled={enabled} setEnabled={setEnabled} />
            <Toggle enabled={enabled} setEnabled={setEnabled} />
            <Toggle size='lg' enabled={enabled} setEnabled={setEnabled} />
            <Toggle disabled enabled={enabled} setEnabled={setEnabled} />
            <Toggle variant='primary' enabled={enabled} setEnabled={setEnabled} />
            <Toggle variant='secondary' enabled={enabled} setEnabled={setEnabled} />

        </div>
    )
}

export default Component