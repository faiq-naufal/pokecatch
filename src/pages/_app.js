//libraries
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";

//components
import Theme from "../containers/templates/Theme/Theme";

//config
import { client } from "../config/ApolloClient";

//hooks
import { MyPokemonProvider } from "../hooks/useMyPokemon";

//assets
import "../lib/css/nprogress.css";
import "@fontsource/vt323/400.css";

export default function App({ Component, pageProps }) {
  //initialize router
  const router = useRouter();

  //initialize state url
  const [URL, setURL] = useState({});

  useEffect(() => {
    //NProgress configuration and routing events
    NProgress.configure({ showSpinner: false });
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    //nprogress listens for route change events
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);

    //when page is loaded set state url
    const origin = window.location.origin;
    const fullURL = window.location.href;

    setURL({ origin, fullURL });

    //clean up route change events
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  return (
    <Theme>
      {/* set apollo provider here */}
      <ApolloProvider client={client}>
        {/* set pokemon provider here */}
        <MyPokemonProvider>
          {/* set default seo */}
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
          {/* all components enter here */}
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ApolloProvider>
    </Theme>
  );
}
