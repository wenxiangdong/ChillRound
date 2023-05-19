import { create } from "zustand";
import { shallow } from "zustand/shallow";

interface CommonStore {
  someThing: string;
  actions: {
    loadSomeThing: () => Promise<void>;
  };
}
export const useCommonStore = create<CommonStore>()((set) => ({
  someThing: "",
  actions: {
    async loadSomeThing() {
      await new Promise((r) => setTimeout(r, 1000));
      set((pre) => ({
        ...pre,
        someThing: "SomeThing",
      }));
    },
  },
}));

export const useCommonStoreActions = () =>
  useCommonStore((store) => store.actions, shallow);

export const useSomeThing = () =>
  useCommonStore((store) => store.someThing, shallow);
