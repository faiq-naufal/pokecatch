//libraries
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";

//graphql query
import { GET_POKEMON } from "../../graphql/poke-api-graphql";

//components
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import CaptureResult from "../../containers/organisms/DetailPokemonPage/CaptureResult/CaptureResult";
import DefaultDetailPage from "../../containers/organisms/DetailPokemonPage/DefaultDetailPage/DefaultDetailPage";
import Loading from "../../components/atoms/Loading/Loading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import Pokeball from "../../components/molecules/Pokeball/Pokeball";

//this component is used to display Pokemon Detail Page
export default function PokemonDetailPage() {
  //initialize router
  const router = useRouter();

  //get url query name
  const queryName = router.query.name;
  const queryToUpperCase = queryName
    ? queryName.charAt(0).toUpperCase() + router.query.name.slice(1)
    : "";

  //initialize state to store captured pokemon result
  const [captureResult, setCaptureResult] = useState({
    result: null,
    pokemon: null,
  });

  //initialize use query that fetch the pokemon specific detail from graphql endpoint using graphql query
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: queryName },
  });

  /**
   * @desc function that handle logic of capturing pokemon in detail pokemon page
   * @param pokemon - pokemon object that will be captured
   */
  const handleCapturePokemon = (pokemon) => {
    //generate random number 50:50 chance
    const isPokemonCaptured = Math.random() < 0.5;

    //check if pokemon is captured or not based on random result
    if (isPokemonCaptured) {
      //if it's captured then set captured state to success and put pokemon captured there
      setCaptureResult(() => ({ result: "success", pokemon: pokemon }));
    } else {
      //if it's not captured set captured state to failed
      setCaptureResult((prevState) => ({
        ...prevState,
        result: "failed",
      }));
    }
  };

  return (
    <>
      {/* set title seo for this page */}
      <NextSeo
        title={`Detail Info for ${queryToUpperCase}`}
        openGraph={{
          title: `Detail Info for ${queryToUpperCase}`,
        }}
      />
      <MainTemplate>
        <ContainerWrapper>
          {/* check if data fetching is still happening */}
          {loading ? (
            <Loading />
          ) : //check if there is any error when fetching the data
          error ? (
            <ErrorMessage>
              Uh oh! Failed to get the data. Please refresh the browser!
            </ErrorMessage>
          ) : (
            <>
              {!captureResult.result ? (
                <>
                  {/* default ui before capture game happens */}
                  <DefaultDetailPage pokemon={data.pokemon} />
                  <Pokeball
                    onClick={() => handleCapturePokemon(data.pokemon)}
                  />
                </>
              ) : captureResult.result ? (
                // state ui after capture result displayed
                <CaptureResult data={captureResult} />
              ) : (
                "Unexpected error"
              )}
            </>
          )}
        </ContainerWrapper>
      </MainTemplate>
    </>
  );
}
