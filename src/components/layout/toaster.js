// components
import { Toaster as ToastContainer } from "react-hot-toast";
import Toast from "@/components/ui/toast";

const Toaster = () => {
    return <ToastContainer>{(t) => <Toast toast={t} />}</ToastContainer>;
};

export default Toaster;
