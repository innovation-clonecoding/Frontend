import { useState } from "react";

const useInput = (state) => {
  const [value, setValue] = useState();
  console.log("value", value);
  const handler = () => {
    setValue(!state);
  };
  return [value, handler];
};

export default useInput;
