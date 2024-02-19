import { create } from "zustand";

interface openType {
  isNavOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

const useIsNavOpenState = create<openType>((set) => ({
  isNavOpen: false,
  setNavOpen: (value: boolean) => set({ isNavOpen: value }),
}));

export default useIsNavOpenState;