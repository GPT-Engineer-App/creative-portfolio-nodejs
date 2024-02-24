import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a202c",
    800: "#2d3748",
    700: "#4a5568",
    600: "#718096",
    500: "#a0aec0",
    400: "#cbd5e0",
    300: "#e2e8f0",
    200: "#edf2f7",
    100: "#f7fafc",
  },
  primary: {
    500: "#e53e3e",
    400: "#f56565",
    300: "#fc8181",
    200: "#feb2b2",
    100: "#fed7d7",
  },
  accent: {
    500: "#38b2ac",
    400: "#4fd1c5",
    300: "#81e6d9",
    200: "#b2f5ea",
    100: "#e6fffa",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
