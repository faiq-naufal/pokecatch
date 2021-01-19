import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { GET_POKEMON } from "../../graphql/poke-api-graphql";
import MainTemplate from "../../containers/templates/MainTemplate/MainTemplate";
import ContainerWrapper from "../../components/atoms/ContainerWrapper/ContainerWrapper";
import Loading from "../../components/atoms/Loading/Loading";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import DetailSideLayout from "../../containers/organisms/DetailSideLayout/DetailSideLayout";
import OutlinedLink from "../../components/atoms/Button/OutlinedLink/OutlinedLink";
import SolidButton from "../../components/atoms/Button/SolidButton/SolidButton";
import PokemonCard from "../../components/molecules/PokemonCard/PokemonCard";
import TopSection from "../../components/molecules/TopSection/TopSection";
import Pokeball from "../../components/molecules/Pokeball/Pokeball";
import BackLink from "../../components/atoms/Button/BackLink/BackLink";
import lightningImg from "../../assets/images/lightning.svg";
import footPrintImg from "../../assets/images/footprint.svg";
import { v4 as uuidv4 } from "uuid";
import { useMyPokemon } from "../../hooks/useMyPokemon";

export default function PokemonDetailPage() {
  const router = useRouter();
  const queryName = router.query.name;
  const queryToUpperCase = queryName
    ? queryName.charAt(0).toUpperCase() + router.query.name.slice(1)
    : "";
  const [captureResult, setCaptureResult] = useState({
    result: null,
    pokemon: null,
  });

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: queryName },
  });

  const handleCapturePokemon = (pokemon) => {
    //generate random number 50/50
    const isPokemonCaptured = Math.random() < 0.5;

    //check if pokemon is captured or not
    if (isPokemonCaptured) {
      setCaptureResult(() => ({ result: "success", pokemon: pokemon }));
    } else {
      setCaptureResult((prevState) => ({
        ...prevState,
        result: "failed",
      }));
    }
  };

  return (
    <>
      <NextSeo
        title={`Detail Info for ${queryToUpperCase}`}
        openGraph={{
          title: `Detail Info for ${queryToUpperCase}`,
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
              {!captureResult.result ? (
                <>
                  <DefaultState pokemon={data.pokemon} />
                  <Pokeball
                    type="capture"
                    onClick={() => handleCapturePokemon(data.pokemon)}
                  />
                </>
              ) : captureResult.result ? (
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

const DefaultState = ({ pokemon }) => (
  <>
    <BackLink href="/" />
    <StyledDetail>
      <div className="detail__col">
        <DetailSideLayout pokemon={pokemon} />
      </div>
      <div className="detail__col">
        <Types pokemon={pokemon} />
        <Abilities pokemon={pokemon} />
        <Moves pokemon={pokemon} />
      </div>
    </StyledDetail>
  </>
);

const StyledDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
    grid-gap: 2.5rem;
  }
`;

const CaptureResult = ({ data }) => {
  const { result, pokemon } = data;
  const { register, handleSubmit, errors } = useForm();
  const myPokemon = useMyPokemon();
  const router = useRouter();

  const validateUniqueNickname = (value) => {
    let capturedPokemons = JSON.parse(localStorage.getItem("myPokemons"));
    return !capturedPokemons.find(
      (capturedPokemon) =>
        capturedPokemon.nickname === value &&
        capturedPokemon.name === pokemon.name
    );
  };

  const onSubmit = async (data) => {
    let formData = {
      ...pokemon,
      nickname: data.nickname,
    };
    myPokemon.capturePokemon({ ...formData, uuid: uuidv4() });
    router.push("/my-pokemon-list");
  };

  return (
    <CaptureResultStyled>
      {result === "success" ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <TopSection>
              <h1 className="result__heading">
                Congratz you got <span>{pokemon.name}</span>!!&nbsp;🎉
              </h1>
              <p className="result__subheading"></p>
            </TopSection>
            <div className="result__body">
              <div className="result__image pokemon">
                <PokemonCard
                  id={pokemon.id}
                  image={pokemon.sprites.front_default}
                  altImg={pokemon.name}
                />
              </div>
              <div className="result__wrapper-input">
                <p>
                  Are you keeping it? If not you can just release and go back to
                  the list. If you want to keep the pokemon you can give it a
                  nickname first.
                </p>
                <p>
                  Be mindful that if you have similar pokemon you cannot give it
                  the same nickname and nickname cannot more than 15 characters.
                </p>
                <input
                  id="nickname"
                  className="result__input"
                  type="text"
                  ref={register({
                    required: "You have to give it a nickname",
                    maxLength: {
                      value: 15,
                      message: "Nickname must less than 15 characters",
                    },
                    validate: {
                      uniqueNickname: validateUniqueNickname,
                    },
                  })}
                  name="nickname"
                  placeholder="Give a nice nickname"
                />
                {errors.nickname ? (
                  <div className="result__input-error">
                    *
                    {errors.nickname.type === "uniqueNickname"
                      ? `Other similar pokemon already uses this nickname. Please use different nickname.`
                      : errors.nickname.message}
                  </div>
                ) : null}
              </div>
              <div className="result__footer">
                <SolidButton type="submit">Keep it</SolidButton>
                <OutlinedLink href="/">No, don't keep it</OutlinedLink>
              </div>
            </div>
          </form>
        </div>
      ) : result === "failed" ? (
        <div>
          <TopSection>
            <h1 className="result__heading">Ooops!!</h1>
            <p className="result__subheading">
              The pokemon already got away. Better luck next time.
            </p>
          </TopSection>
          <div className="result__body">
            <div className="result__image oops">
              <img src={footPrintImg} alt="Footprint" />
            </div>
            <div className="result__footer">
              <OutlinedLink href="/">Try other ones</OutlinedLink>
            </div>
          </div>
        </div>
      ) : (
        "Unexpected error"
      )}
    </CaptureResultStyled>
  );
};

const CaptureResultStyled = styled.div`
  text-align: center;

  .result__body {
    margin: 0 auto;

    max-width: 600px;
  }

  .result__heading {
    span {
      text-transform: capitalize;
    }
  }

  .result__image {
    width: 75%;
    max-width: 260px;
    margin: 0 auto;
    margin-top: -2rem;

    @media (min-width: 768px) {
      max-width: 300px;
      margin-top: -1.5rem;
    }
  }

  .result__image.pokemon {
    max-width: 240px;
    margin: 0 auto;
  }

  .result__wrapper-input {
    margin: 2.5rem 0;
    font-size: 1.25rem;

    p:not(:last-of-type) {
      margin-bottom: 1.25rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .result__input {
    margin-top: 2rem;
    width: 100%;
    padding: 6px 16px;
    border: solid 2px #000;
    font-size: 1.5rem;
    text-align: center;
    font-family: inherit;
    letter-spacing: 0.25px;

    @media (min-width: 768px) {
      padding: 10px 20px;
      font-size: 1.75rem;
    }
  }

  .result__input-error {
    color: #c11313;
    text-align: left;
    margin-top: 0.25rem;
    font-size: 1.125rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .result__footer {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin: 2rem 0 0 0;
    }

    @media (min-width: 480px) {
      margin-left: 50px;
      margin-right: 50px;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      a {
        order: 1;
        margin: 0;
      }

      button {
        order: 2;
        margin: 0 0 0 2rem;
      }
    }

    > * {
      width: 100%;
      flex: 1;
    }
  }
`;

const Types = ({ pokemon }) => (
  <StyledTypes>
    <strong>Types:</strong>
    <div className="types">
      {pokemon.types.map(({ type }) => (
        <div key={uuidv4()} className="type">
          {type.name}
        </div>
      ))}
    </div>
  </StyledTypes>
);

const StyledTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: solid 4px #171923;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .types {
    display: flex;
  }

  .type {
    text-transform: capitalize;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    background: #c11313;
    border: solid 2px #171923;
    color: #fff;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .type:not(:first-of-type) {
    margin-left: 0.75rem;
  }
`;

const Abilities = ({ pokemon }) => (
  <StyledAbilities>
    <strong>Abilities:</strong>
    <div className="abilities">
      {pokemon.abilities.map(({ ability }) => (
        <div key={uuidv4()} className="ability">
          {ability.name}
        </div>
      ))}
    </div>
  </StyledAbilities>
);

const StyledAbilities = styled.div`
  margin: 2rem 0;

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .ability {
    font-size: 1.25rem;
    text-transform: capitalize;
    margin-top: 1rem;
    position: relative;
    padding-left: 30px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

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
`;

const Moves = ({ pokemon }) => (
  <StyledMoves>
    <strong>Moves:</strong>
    <div className="moves">
      {pokemon.moves.map(({ move }) => (
        <div key={uuidv4()} className="move">
          <span>
            <img width="22px" height="22px" src={lightningImg} alt="Moves" />
          </span>
          {move.name}
        </div>
      ))}
    </div>
  </StyledMoves>
);

const StyledMoves = styled.div`
  border: solid 4px #171923;
  padding: 0.75rem 1rem;
  position: relative;

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .moves {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .move {
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem 0.25rem 2.75rem;
    border-radius: 12px;
    border: solid 3px #171923;
    background: #c11313;
    color: #fff;
    text-transform: capitalize;
    position: relative;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      position: absolute;
      left: 5px;
      bottom: 0;
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
`;
