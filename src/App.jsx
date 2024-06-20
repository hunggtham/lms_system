import { useState } from "react";

import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <Button variant="outlined" onClick={() => handleClick()}>
        Test
      </Button>
      <div>{count}</div>
    </>
  );
}

export default App;
