import { useState } from "react";

import "./App.css";
import "./theme/reset.css";
import Test from "./pages/Test";
import theme from "@/theme/index";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

function App() {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <AppRoutes /> */}
        <Test />
        <></>
        {/* </ErrorBoundary> */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
