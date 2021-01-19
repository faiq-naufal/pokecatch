//libraries
import Link from "next/link";
import PropTypes from "prop-types";

//styled component with emotion
import { StyledBackLink } from "./styled";

//this is component for back to pokemon list link
export default function BackLink({ href }) {
  return (
    <StyledBackLink>
      <Link href={href}>
        <a>&lt;- Back to Pokemon List</a>
      </Link>
    </StyledBackLink>
  );
}

//type checking
BackLink.propTypes = {
  href: PropTypes.string,
};
