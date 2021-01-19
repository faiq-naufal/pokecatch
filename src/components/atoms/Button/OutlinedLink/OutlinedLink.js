import PropTypes from "prop-types";
import Link from "next/link";
import { StyledOutlinedLink } from "./styled";

export default function OutlinedLink({ href, children, ...rest }) {
  return (
    <Link href={href} passHref>
      <StyledOutlinedLink {...rest}>{children}</StyledOutlinedLink>
    </Link>
  );
}

OutlinedLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};
