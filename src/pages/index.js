import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/poke-api-graphql";
import MainTemplate from "../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../components/atoms/ContainerWrapper/ContainerWrapper";
import PokemonList from "../containers/organisms/PokemonList/PokemonList";
import TopSection from "../components/molecules/TopSection/TopSection";

//view layer
export default function HomePage() {
  const [queryOptions, setQueryOptions] = useState({
    limit: 20,
    offset: 0,
  });

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: queryOptions.limit, offset: queryOptions.offset },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;

  return (
    <>
      <MainTemplate>
        <ContainerWrapper>
          <>
            <TopSection>Gotta Catch 'Em All!</TopSection>
            <PokemonList pokemons={data.pokemons.results} />
          </>
        </ContainerWrapper>
      </MainTemplate>
    </>
  );
}
