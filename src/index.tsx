import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components"; // 1
import { PatchProvider } from "./contexts/PatchContext";
import { TriggerProvider } from "./contexts/TriggerContext";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <PatchProvider>
      <TriggerProvider>
        <GlobalStyles />
        <App />
      </TriggerProvider>
    </PatchProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
