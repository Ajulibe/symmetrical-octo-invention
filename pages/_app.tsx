import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { MyGlobalStyle } from "@src/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { myTheme as theme } from "@src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyGlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
