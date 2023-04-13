import { create } from "zustand";

const store = (set) => ({
    // state
    switchActive: '',

    // actions
    setSwitchActive: (val) => set({ switchActive: val }),
})

const useMDXStore = create(store);

export default useMDXStore