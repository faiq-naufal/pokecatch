import Link from "next/link";
import { StyledBackLink } from "./styled";
import PropTypes from "prop-types";

export default function BackLink({ href }) {
  return (
    <StyledBackLink>
      <Link href={href}>
        <a>&lt;- Back to Pokemon List</a>
      </Link>
    </StyledBackLink>
  );
}

BackLink.propTypes = {
  href: PropTypes.string,
};
