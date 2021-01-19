//components
import NavLink from "../../../components/atoms/Button/NavLink/NavLink";

//assets
import markerImg from "../../../assets/images/marker.svg";
import pokebagImg from "../../../assets/images/pokebag.svg";

//styled component with emotion
import { StyledNavbar, StyledContainerWrapperNavbar } from "./styled";

//this is component for displaying the navbar and nav links
export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledContainerWrapperNavbar>
        <ul>
          <li>
            <NavLink href="/" activeClassName="active">
              <a>
                <span className="link__icon">
                  <img src={markerImg} alt="Pokemon Field" />
                </span>
                <span className="link__label">Explore</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/my-pokemon-list" activeClassName="active">
              <a>
                <span className="link__icon">
                  <img src={pokebagImg} alt="My Pokemon List" />
                </span>
                <span className="link__label">My Pokemon List</span>
              </a>
            </NavLink>
          </li>
        </ul>
      </StyledContainerWrapperNavbar>
    </StyledNavbar>
  );
}
