import { atom, createStore, Provider } from "jotai";

export const offsetIndexAtom = atom(0);

export const store = createStore();

export const CustomProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
