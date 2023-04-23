import Input from "@/components/ui/input"
import { AiOutlineAim } from "react-icons/ai"

const Component = () => {
    return (
        <div className="flex flex-col gap-4">
            <Input size='sm' />
            <Input />
            <Input size='lg' />
            <Input prefix={<AiOutlineAim />} size='sm' />
            <Input prefix={<AiOutlineAim />} />
            <Input prefix={<AiOutlineAim />} size='lg' />
            <Input suffix={<AiOutlineAim />} />
            <Input leftIcon={<AiOutlineAim />} />
            <Input rightIcon={<AiOutlineAim />} />
            <Input prefix={<AiOutlineAim />} leftIcon={<AiOutlineAim />} />
            <Input disabled />

        </div>
    )
}

export default Component