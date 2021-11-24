import { useState } from "react";
import { ModalContext } from "../context/ModalContext";

export const ModalProvider: React.FC = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(prevState => !prevState);
  }

  const value = {
    modalOpen,
    openModal
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}
