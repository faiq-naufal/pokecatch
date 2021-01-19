import logo from "../../../../assets/images/PokeCatch.png";
import Link from "next/link";
import { StyledLogo } from "./styled";

export default function Logo() {
  return (
    <StyledLogo>
      <Link href="/">
        <a>
          <img src={logo} alt="PokeCatch Logo" />
        </a>
      </Link>
    </StyledLogo>
  );
}
