import Select from "@/components/ui/select"
import { useState } from "react"

let people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
]

const Component = () => {



    let [selected, setSelected] = useState(people[0])



    return (
        <div>
            <Select
                options={people}
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    )
}

export default Component