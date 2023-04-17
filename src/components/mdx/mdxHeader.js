// components
import Switch from "@/components/ui/switch"

// utils
import useMDXStore from "@/store/useMDXStore"

const MDXHeader = ({ data }) => {
    // store destructure
    const store = useMDXStore()

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex flex-col truncate">
                <p className="truncate text-xs sm:text-sm text-tertiary-400 dark:text-tertiary-500">
                    <span className="font-medium text-sm sm:text-base text-primary-500">{data.tag}</span>
                    <span className="mx-1 md:mx-2">•</span>
                    <span>{data.readingTime}</span>
                    <span className="mx-1 md:mx-2">•</span>
                    <span className="mr-1 hidden md:inline-block">Last updated on</span>
                    <span>{data.date}</span>
                </p>
                <h1 className="text-3xl sm:text-3xl md:text-4xl mb-2 font-bold">{data.title}</h1>
            </div>
            <div className="flex flex-col flex-shrink-0 sm:flex-row justify-between gap-4">
                {/* toggle */}
                {data.toggle &&
                    <Switch
                        size='sm'
                        values={data.toggleValues}
                        active={store.switchActive}
                        setActive={store.setSwitchActive} />
                }
            </div>
        </div>
    )
}

export default MDXHeader