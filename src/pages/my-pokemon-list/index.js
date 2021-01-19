//libraries
import { NextSeo } from "next-seo";

//components
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import Loading from "../../components/atoms/Loading/Loading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import OutlinedLink from "../../components/atoms/Button/OutlinedLink/OutlinedLink";
import PokemonList from "../../containers/organisms/PokemonList/PokemonList";
import TopSection from "../../components/molecules/TopSection/TopSection";

//hooks
import { useMyPokemon } from "../../hooks/useMyPokemon";

//this component is used to display My Pokemon List Page
export default function MyPokemonList() {
  /**
   * @desc useMyPokemon is a hook that manage local
   * pokemon data from MyPokemonProvider
   */
  const myPokemon = useMyPokemon();

  return (
    <>
      {/* set title seo for this page */}
      <NextSeo
        title="My Pokemon List"
        openGraph={{
          title: "My Pokemon List",
        }}
      />
      <MainTemplate>
        <ContainerWrapper>
          {/* check if the hooks is already initialized */}
          {!myPokemon ? (
            <Loading />
          ) : (
            <>
              <TopSection>
                <h1>My Pokemon List</h1>
              </TopSection>
              {/* 
              if the hooks is already initialized then get user captured pokemons which already stored in local storage using getCapturedPokemons function 
              */}
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
