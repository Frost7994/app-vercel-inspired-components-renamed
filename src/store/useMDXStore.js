import { create } from "zustand";

const store = (set) => ({
    // state
    switchActive: 'default',

    // actions
    setSwitchActive: (val) => set({ switchActive: val }),
})

const useMDXStore = create(store);

export default useMDXStore