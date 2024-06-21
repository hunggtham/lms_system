import React, { useState } from "react";
import CButton from "../component/CButton";
import CNavbar from "../component/CNavbar";
const Test = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <CNavbar />
      <CButton
        sx={{ width: "50px" }}
        onClick={() => handleClick()}
        label="Test"
      />
      <div>{count}</div>
    </>
  );
};

export default Test;
