import { NextSeo } from "next-seo";
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import Loading from "../../components/atoms/Loading/Loading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import OutlinedLink from "../../components/atoms/Button/OutlinedLink/OutlinedLink";
import PokemonList from "../../containers/organisms/PokemonList/PokemonList";
import TopSection from "../../components/molecules/TopSection/TopSection";
import { useMyPokemon } from "../../hooks/useMyPokemon";

export default function MyPokemonList() {
  const myPokemon = useMyPokemon();

  return (
    <>
      <NextSeo
        title="My Pokemon List"
        openGraph={{
          title: "My Pokemon List",
        }}
      />
      <MainTemplate>
        <ContainerWrapper>
          {!myPokemon ? (
            <Loading />
          ) : (
            <>
              <TopSection>
                <h1>My Pokemon List</h1>
              </TopSection>
              {myPokemon.getCapturedPokemons().length === 0 ? (
                <ErrorMessage>
                  <div>Your pokemon list is empty. Let's catch some!</div>
                  <OutlinedLink
                    href="/"
                    style={{ display: "inline-flex", marginTop: "2rem" }}
                  >
                    Let's Catch!
                  </OutlinedLink>
                </ErrorMessage>
              ) : (
                <PokemonList pokemons={myPokemon.getCapturedPokemons()} />
              )}
            </>
          )}
        </ContainerWrapper>
      </MainTemplate>
    </>
  );
}
