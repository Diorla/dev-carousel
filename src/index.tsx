import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const color = {
  secondary: "salmon",
  secondaryDark: "#f8412c",
  secondaryLight: "#fb998e",
  primary: "#44A3A2",
  primaryDark: "#368282",
  primaryLight: "#61bdbc",
  shade: "#777777",
  shadeDark: "#333333",
  shadeLight: "#a0a0a0"
};

const font = {
  headerOne: "48px",
  headerTwo: "40px",
  headerThree: "32px",
  subHeader: "24px",
  text: "16px",
  subText: "14px",
  cursive: "Redressed"
};

const theme = {
  color,
  font
};

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
