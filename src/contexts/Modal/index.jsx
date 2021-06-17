import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
