import { StyledHeader } from "./styled";
import Logo from "../../../components/atoms/Logo/Logo";
import ContainerWrapper from "../../../components/atoms/ContainerWrapper/ContainerWrapper";

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
