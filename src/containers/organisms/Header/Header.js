//components
import ContainerWrapper from "../../../components/atoms/ContainerWrapper/ContainerWrapper";

//assets
import Logo from "../../../components/atoms/Image/Logo/Logo";

//styled component with emotion
import { StyledHeader } from "./styled";

//this is component for displaying header component and will be used for every pages
export default function Header() {
  return (
    <StyledHeader>
      <ContainerWrapper>
        <div className="header__body">
          <Logo />
        </div>
      </ContainerWrapper>
    </StyledHeader>
  );
}
