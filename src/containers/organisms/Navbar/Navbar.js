import Link from "next/link";
import styled from "@emotion/styled";
import { StyledNavbar } from "./styled";
import markerIcon from "../../../assets/images/marker.svg";
import pokebagIcon from "../../../assets/images/pokebag.svg";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledContainerWrapperNavbar>
        <ul>
          <li>
            <Link href="/">
              <a>
                <span className="link__icon">
                  <img src={markerIcon} alt="Pokemon Field" />
                </span>
                <span className="link__label">Explore</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/my-pokemon-list">
              <a>
                <span className="link__icon">
                  <img src={pokebagIcon} alt="My Pokemon List" />
                </span>
                <span className="link__label">My Pokemon List</span>
              </a>
            </Link>
          </li>
        </ul>
      </StyledContainerWrapperNavbar>
    </StyledNavbar>
  );
}

const StyledContainerWrapperNavbar = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 0 16px;
  }

  @media (min-width: 992px) {
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    padding: 0 24px;
    max-width: 1200px;
  }
`;
