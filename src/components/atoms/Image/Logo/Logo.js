//libraries
import Link from "next/link";

//assets
import logo from "../../../../assets/images/PokeCatch.png";

//styled component with emotion
import { StyledLogo } from "./styled";

//this is component for displaying logo in header
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
