// components
import { Toaster as ToastContainer, resolveValue } from "react-hot-toast";
import Toast from "@/components/ui/toast";

const Toaster = () => {
  return <ToastContainer
  >{(t) => <Toast toast={resolveValue(t)} />}</ToastContainer>;
};

export default Toaster;
