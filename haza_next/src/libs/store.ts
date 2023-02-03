import { create } from "zustand"

interface BearState {
  bears: number,
  increasePopulation: () => void,
  removeAllBears: () => void,
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}))

interface TokenState {
  token: string,
  setToken: (token: string) => void,
  invalidateToken: () => void,
}

export const useTokenStore = create<TokenState>((set) => ({
  token: "",
  setToken: (token: string) => set({token}),
  invalidateToken: () => set({token: ""}),
}))