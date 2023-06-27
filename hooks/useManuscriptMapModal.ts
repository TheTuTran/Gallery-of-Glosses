import { create } from "zustand";

interface ManuscriptMapStore {
  isOpen: boolean;
  selectedManuscripts: any;
  onOpen: () => void;
  onClose: () => void;
}

const useManuscriptMapModal = create<ManuscriptMapStore>((set) => ({
  isOpen: false,
  selectedManuscripts: [],
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useManuscriptMapModal;
