//libraries
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

//components
import OutlinedLink from "../../../../components/atoms/Button/OutlinedLink/OutlinedLink";
import SolidButton from "../../../../components/atoms/Button/SolidButton/SolidButton";
import PokemonCard from "../../../../components/molecules/PokemonCard/PokemonCard";
import TopSection from "../../../../components/molecules/TopSection/TopSection";

//styled component with emotion
import { StyledCaptureResult } from "./styled";

//assets
import footPrintImg from "../../../../assets/images/footprint.svg";

//hooks
import { useMyPokemon } from "../../../../hooks/useMyPokemon";

export default function CaptureResult({ data }) {
  const { result, pokemon } = data;

  //initialize react hook form for managing form input
  const { register, handleSubmit, errors } = useForm();

  //initialize my pokemon hooks
  const myPokemon = useMyPokemon();

  //initialize router
  const router = useRouter();

  /**
   * @desc function that validate unique nickname when pokemon will be kept
   * @param value string
   * @return boolean true or false
   */
  const validateUniqueNickname = (value) => {
    let convertedValue = value.toLowerCase().trim();
    let capturedPokemons = JSON.parse(localStorage.getItem("myPokemons"));
    return !capturedPokemons.find(
      (capturedPokemon) =>
        capturedPokemon.nickname === convertedValue &&
        capturedPokemon.name === pokemon.name
    );
  };

  /**
   * @desc onsubmit handle runs when form submitted
   * @param data object form data
   */
  const onSubmit = async (data) => {
    let formData = {
      ...pokemon,
      nickname: data.nickname,
    };
    myPokemon.capturePokemon({ ...formData, uuid: uuidv4() });
    router.push("/my-pokemon-list");
  };

  return (
    <StyledCaptureResult>
      {/* if the captured result is success then display success state */}
      {result === "success" ? (
        <div>
          {/* when onsubmit form call handleSubmit that will run onsubmit function */}
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
                {/* input and its validation registration */}
                <input
                  id="nickname"
                  className="result__input"
                  type="text"
                  ref={register({
                    required: "You have to give it a nickname",
                    maxLength: {
                      value: 15,
                      message: "Nickname cannot more than 15 characters",
                    },
                    validate: {
                      uniqueNickname: validateUniqueNickname,
                    },
                  })}
                  name="nickname"
                  placeholder="Give a nice nickname"
                />
                {/* display various errors */}
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
          {/* if the captured result is failed then display failed state */}
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
    </StyledCaptureResult>
  );
}

//type checking
CaptureResult.propTypes = {
  data: PropTypes.object.isRequired,
};
