//libraries
import PropTypes from "prop-types";
import Link from "next/link";

//styled component with emotion
import { StyledOutlinedLink } from "./styled";

//this is component for making outlined style link
export default function OutlinedLink({ href, children, ...rest }) {
  return (
    <Link href={href} passHref>
      <StyledOutlinedLink {...rest}>{children}</StyledOutlinedLink>
    </Link>
  );
}

//type checking
OutlinedLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};
