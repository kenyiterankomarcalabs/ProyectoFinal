import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  saveProducts: [],
  setProducts: (data) =>
    set(() => ({
      products: data,
      saveProducts: data,
    })),
  filterByName: (name) => {
    set((state) => ({
      products: state.products.filter((item) => item.nombre.includes(name)),
    }));
  },
  backupProducts: () =>
    set((state) => ({
      products: state.saveProducts,
    })),
}));
export default useStore;
