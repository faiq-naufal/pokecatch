import { useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import Theme from "../containers/templates/Theme/Theme";
import { PokemonProvider } from "../hooks/useMyPokemon";
import { client } from "../config/ApolloClient";
import "../lib/css/nprogress.css";
import "@fontsource/vt323/400.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    //NProgress configuration and routing events
    NProgress.configure({ showSpinner: false });
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  return (
    <Theme>
      <ApolloProvider client={client}>
        <PokemonProvider>
          <Component {...pageProps} />
        </PokemonProvider>
      </ApolloProvider>
    </Theme>
  );
}
