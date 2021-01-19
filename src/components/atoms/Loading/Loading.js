import { StyledLoading } from "./styled";
import pokeball from "../../../assets/images/pokeball.svg";

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
