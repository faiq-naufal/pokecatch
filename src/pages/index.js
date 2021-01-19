import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/poke-api-graphql";
import MainTemplate from "../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../components/atoms/ContainerWrapper/ContainerWrapper";
import Loading from "../components/atoms/Loading/Loading";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import SolidButton from "../components/atoms/Button/SolidButton/SolidButton";
import PokemonList from "../containers/organisms/PokemonList/PokemonList";
import TopSection from "../components/molecules/TopSection/TopSection";
import { useMyPokemon } from "../hooks/useMyPokemon";

export default function HomePage() {
  const myPokemon = useMyPokemon();

  const capturedPokemons = myPokemon.getCapturedPokemons();
  const totalCapturedPokemons = capturedPokemons.length;

  const [limit, setLimit] = useState(20);

  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: 0 },
  });

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
      <NextSeo
        title="Explore PokeCatch, Catch Your Pokemon Here!"
        openGraph={{
          title: "Explore PokeCatch, Catch Your Pokemon Here!",
        }}
      />
      <MainTemplate>
        <ContainerWrapper>
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorMessage>
              Uh oh! Failed to get the data. Please refresh the browser!
            </ErrorMessage>
          ) : (
            <>
              <TopSection>
                <h1>Gotta Catch 'Em All!</h1>
              </TopSection>
              <TotalCapturedCount>
                You owned {totalCapturedPokemons}{" "}
                {totalCapturedPokemons > 1 ? `pokemons` : `pokemon`} total.{" "}
                {totalCapturedPokemons > 1 ? (
                  <Link href="/my-pokemon-list" passHref>
                    <StyledLink>See here</StyledLink>
                  </Link>
                ) : null}
              </TotalCapturedCount>
              <PokemonList
                pokemons={data.pokemons.results}
                getIndividualPokemonTotalCaptured={
                  getIndividualPokemonTotalCaptured
                }
              />
              {data.pokemons &&
              data.pokemons.nextOffset > 0 &&
              data.pokemons.next !== null ? (
                <LoadMore>
                  <SolidButton
                    onClick={async () => {
                      const currentLength = data.pokemons.results.length;

                      const moreResult = await fetchMore({
                        variables: { offset: currentLength },
                      });
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

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TotalCapturedCount = styled.div`
  padding-bottom: 1.75rem;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const LoadMore = styled.div`
  margin: 2rem 0;
  text-align: center;

  button {
    min-width: 200px;
  }
`;
