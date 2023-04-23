import Toast from "@/components/ui/toast"

const Component = () => {
    return (
        <div className="flex gap-4 items-center">
            <Toast toast={{ id: 1, message: "This is a message", type: "default", title: "This is a title" }} />
            <Toast toast={{ id: 2, message: "This is a message", type: "success", title: "This is a title" }} />
            <Toast toast={{ id: 3, message: "This is a message", type: "error", title: "This is a title" }} />
            <Toast toast={{ id: 4, message: "This is a message", type: "warning", title: "This is a title" }} />
            <Toast toast={{ id: 5, message: "This is a message", type: "loading", title: "This is a title" }} />
        </div>
    )
}

export default Component