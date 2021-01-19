//libraries
import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useQuery } from "@apollo/client";

// components
import MainTemplate from "../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../components/atoms/ContainerWrapper/ContainerWrapper";
import Loading from "../components/atoms/Loading/Loading";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import SolidButton from "../components/atoms/Button/SolidButton/SolidButton";
import PokemonList from "../containers/organisms/PokemonList/PokemonList";
import TopSection from "../components/molecules/TopSection/TopSection";

//graphql query
import { GET_POKEMONS } from "../graphql/poke-api-graphql";

//hooks
import { useMyPokemon } from "../hooks/useMyPokemon";

//this component is used to display Home Page / Pokemon List Page
export default function HomePage() {
  /**
   * @desc useMyPokemon is a hook that manage local
   * pokemon data from MyPokemonProvider
   */
  const myPokemon = useMyPokemon();

  //return array of pokemons
  const capturedPokemons = myPokemon.getCapturedPokemons();

  //return total of captured pokemons
  const totalCapturedPokemons = capturedPokemons.length;

  //initialize limit state for returning data from graphql api
  const [limit, setLimit] = useState(20);

  //initialize use query that fetch the pokemon data from graphql endpoint using graphql query
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: 0 },
  });

  /**
   * @desc this function will get info for each individual pokemon that has been captured and then put it into Map to make it easy to count the total pokemon that has same name
   * @return object map - consists of collection of pokemon captured with its total
   * ex: pikachu: 2
   */
  const getIndividualPokemonTotalCaptured = () => {
    const localPokemonData = capturedPokemons;
    const pokemonMap = new Map();

    /*
      loop each local pokemon data and put each into map with total count for its individual pokemon
    */
    localPokemonData.forEach((data) => {
      const name = data.name;

      if (pokemonMap.has(name)) {
        const addCount = pokemonMap.get(name) + 1;
        pokemonMap.set(name, addCount);
      } else {
        pokemonMap.set(name, 1);
      }
    });

    return pokemonMap;
  };

  return (
    <>
      {/* set title seo for this page */}
      <NextSeo
        title="Explore PokeCatch, Catch Your Pokemon Here!"
        openGraph={{
          title: "Explore PokeCatch, Catch Your Pokemon Here!",
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
              <TopSection>
                <h1>Gotta Catch 'Em All!</h1>
              </TopSection>
              {/* display total captured pokemon in local storage */}
              <TotalCapturedCount>
                You owned {totalCapturedPokemons}{" "}
                {totalCapturedPokemons > 1 ? `pokemons` : `pokemon`} total.{" "}
                {totalCapturedPokemons > 1 ? (
                  <Link href="/my-pokemon-list" passHref>
                    <StyledLink>See here</StyledLink>
                  </Link>
                ) : null}
              </TotalCapturedCount>
              {/* display list of pokemons and pass the individual pokemon total captured */}
              <PokemonList
                pokemons={data.pokemons.results}
                getIndividualPokemonTotalCaptured={
                  getIndividualPokemonTotalCaptured
                }
              />
              {/* check if there is any next data and next offset from endpoint then display more pokemons  */}
              {data.pokemons &&
              data.pokemons.nextOffset > 0 &&
              data.pokemons.next !== null ? (
                <LoadMore>
                  <SolidButton
                    onClick={async () => {
                      const currentLength = data.pokemons.results.length;
                      setLimit(currentLength + 20);
                    }}
                  >
                    Load More
                  </SolidButton>
                </LoadMore>
              ) : null}{" "}
            </>
          )}
        </ContainerWrapper>
      </MainTemplate>
    </>
  );
}

//styled component with emotion
const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

//styled component with emotion
const TotalCapturedCount = styled.div`
  padding-bottom: 1.75rem;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;

//styled component with emotion
const LoadMore = styled.div`
  margin: 2rem 0;
  text-align: center;

  button {
    min-width: 200px;
  }
`;
