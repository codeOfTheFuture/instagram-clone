import { useContext, createContext } from "react";

interface Modal {
  modalOpen: boolean;
  openModal: () => void;
}

export const ModalContext = createContext<Modal>({
  modalOpen: false,
  openModal: () => {},
});

export const useModal = () => useContext(ModalContext);
