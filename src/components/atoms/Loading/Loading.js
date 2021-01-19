//assets
import pokeball from "../../../assets/images/pokeball.svg";

//styled component with emotion
import { StyledLoading } from "./styled";

//this is component for displaying loading pokeball
export default function Loading() {
  return (
    <StyledLoading>
      <div className="loading__img">
        <img width="84px" height="84px" src={pokeball} alt="Loading..." />
      </div>
      <p className="loading__label">Loading...</p>
    </StyledLoading>
  );
}
