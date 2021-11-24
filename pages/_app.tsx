import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from '../provider/ModalProvider';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ModalProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ModalProvider>
  );
}

export default MyApp;
