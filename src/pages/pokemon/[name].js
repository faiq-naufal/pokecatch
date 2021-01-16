import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { GET_POKEMON } from "../../graphql/poke-api-graphql";
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import DetailSideLayout from "../../containers/organisms/DetailSideLayout/DetailSideLayout";
import Pokeball from "../../components/molecules/Pokeball/Pokeball";
import BackLink from "../../components/atoms/BackLink/BackLink";
import lightning from "../../assets/images/lightning.svg";
import { v4 as uuidv4 } from "uuid";

export default function PokemonDetailPage() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: router.query.name },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;

  const { pokemon } = data;

  console.log(pokemon);

  return (
    <MainTemplate>
      <StyledDetail>
        <ContainerWrapper>
          <BackLink href="/" />
          <div className="detail__layout">
            <div className="detail__col">
              <DetailSideLayout pokemon={pokemon} />
            </div>
            <div className="detail__col">
              <div className="detail__types">
                <strong className="detail__label">Types:</strong>
                <div className="types">
                  {pokemon.types.map(({ type }) => (
                    <div key={uuidv4()} className="type">
                      {type.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="detail__abilities">
                <strong className="detail__label">Abilities:</strong>
                <div className="abilities">
                  {pokemon.abilities.map(({ ability }) => (
                    <div key={uuidv4()} className="ability">
                      {ability.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="detail__moves">
                <strong className="detail__label">Moves:</strong>
                <div className="moves">
                  {pokemon.moves.map(({ move }) => (
                    <div key={uuidv4()} className="move">
                      <span>
                        <img src={lightning} alt="Moves" />
                      </span>
                      {move.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </StyledDetail>
      <Pokeball />
    </MainTemplate>
  );
}

const StyledDetail = styled.div`
  .detail__layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: 300px 1fr;
      grid-gap: 2.5rem;
    }
  }

  strong {
    display: block;
    font-size: 1.75rem;
    font-weight: 600;
  }

  .detail__types {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.25rem;
    border-bottom: solid 4px #171923;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    strong {
      margin-right: 0.5rem;
    }

    .types {
      display: flex;
    }

    .type {
      text-transform: capitalize;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      background: #c11313;
      border: solid 2px #171923;
      color: #fff;
    }

    .type:not(:first-of-type) {
      margin-left: 0.75rem;
    }
  }

  .detail__abilities {
    margin: 2rem 0;

    .ability {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-top: 1rem;
      position: relative;
      padding-left: 30px;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #c11313;
        border: solid 2px #171923;
      }
    }
  }

  .detail__moves {
    border: solid 4px #171923;
    padding: 0.75rem 1rem;
    position: relative;

    .moves {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    }

    .move {
      margin-top: 1rem;
      margin-right: 0.5rem;
      font-size: 1.5rem;
      padding: 0.25rem 0.5rem 0.25rem 2.75rem;
      border-radius: 12px;
      border: solid 3px #171923;
      background: #c11313;
      color: #fff;
      text-transform: capitalize;
      position: relative;

      span {
        position: absolute;
        left: 5px;
        bottom: 0;
        img {
          width: 22px;
          height: auto;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        width: 36px;
        height: calc(100% + 4px);
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        background-color: #171923;
      }
    }
  }
`;
