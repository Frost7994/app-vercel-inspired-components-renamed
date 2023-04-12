// utils
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const mergeClasses = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default mergeClasses;
