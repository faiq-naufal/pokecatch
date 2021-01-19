import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
import Theme from "../containers/templates/Theme/Theme";
import { MyPokemonProvider } from "../hooks/useMyPokemon";
import { client } from "../config/ApolloClient";
import "../lib/css/nprogress.css";
import "@fontsource/vt323/400.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [URL, setURL] = useState({});

  useEffect(() => {
    //NProgress configuration and routing events
    NProgress.configure({ showSpinner: false });
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);

    const origin = window.location.origin;
    const fullURL = window.location.href;

    setURL({ origin, fullURL });

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  return (
    <Theme>
      <ApolloProvider client={client}>
        <MyPokemonProvider>
          <DefaultSeo
            description="PokeCatch Website"
            canonical={URL.fullURL}
            openGraph={{
              description: "PokeCatch Website",
              type: "website",
              locale: "en-US",
              url: URL.origin,
              site_name: "PokeCatch",
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image",
            }}
          />
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ApolloProvider>
    </Theme>
  );
}
