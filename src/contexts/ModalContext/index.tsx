import { createContext, useEffect, useState } from 'react';

import ContactModel from '../../components/ContactModal';

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const modalContext = createContext({} as ModalContextProps);

interface ModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const props = {
    isModalOpen,
    openModal,
    closeModal
  }

  return (
    <modalContext.Provider value={props}>
      { children }
      { isModalOpen && <ContactModel />}
    </modalContext.Provider>
  );
}

export default ModalContextProvider;
