import { Button } from "@mui/material";
import React, { useState } from "react";
import CButton from "../component/CButton";

const Test = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <CButton sx={{ padding: "20px" }} onClick={() => handleClick()}>
        Test
      </CButton>
      <div>{count}</div>
    </>
  );
};

export default Test;
