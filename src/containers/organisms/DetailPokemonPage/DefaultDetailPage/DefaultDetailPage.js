//libraries
import PropTypes from "prop-types";

//components
import DetailSideLayout from "../DetailSideLayout/DetailSideLayout";
import BackLink from "../../../../components/atoms/Button/BackLink/BackLink";
import Abilities from "../Abilities/Abilities";
import Moves from "../Moves/Moves";
import Types from "../Types/Types";

//styled component with emotion
import { StyledDefaultDetailPage } from "./styled";

//this is component for displaying default detail page before changing into captured pokemon state or lost pokemon state
export default function DefaultDetailPage({ pokemon }) {
  return (
    <>
      <BackLink href="/" />
      <StyledDefaultDetailPage>
        <div className="detail__col">
          <DetailSideLayout pokemon={pokemon} />
        </div>
        <div className="detail__col">
          <Types pokemon={pokemon} />
          <Abilities pokemon={pokemon} />
          <Moves pokemon={pokemon} />
        </div>
      </StyledDefaultDetailPage>
    </>
  );
}

//type checking
DefaultDetailPage.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
