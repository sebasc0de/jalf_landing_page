import "../styles/scrollbar.css";
import "../styles/styles.scss";
import { UIProvider } from "../context/UI";
import { UserProvider } from "../context/User";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </UserProvider>
  );
}

export default MyApp;
