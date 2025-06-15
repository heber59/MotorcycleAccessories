import { useState } from "react";

const useHome = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return {
    showModal,
    toggleModal,
  };
};

export { useHome };
