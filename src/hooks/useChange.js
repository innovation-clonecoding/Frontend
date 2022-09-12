import { useState } from "react";

const useChange = () => {
  const [isModal, setIsModal] = useState(false);
  const handler = () => {
    setIsModal(!isModal);
  };
  return [isModal, handler];
};

export default useChange;
