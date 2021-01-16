import { useState } from "react";
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import PokemonList from "../../containers/organisms/PokemonList/PokemonList";
import TopSection from "../../components/molecules/TopSection/TopSection";

export default function MyPokemonList() {
  return (
    <MainTemplate>
      <ContainerWrapper>
        <TopSection>My Pokemon List</TopSection>
        {/* <PokemonList pokemons={data.pokemons.results} /> */}
      </ContainerWrapper>
    </MainTemplate>
  );
}
