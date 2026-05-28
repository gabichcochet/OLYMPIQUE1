import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";   // ✔️ IMPORT PAR DÉFAUT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>   {/* ✔️ theme n'est PAS undefined */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
