//libraries
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

//this is component for navigation links
export default function NavLink({ href, children, activeClassName }) {
  //initialize router hooks
  const router = useRouter();

  //get other classname
  let className = children.props.className || "";

  // check if url pathname in router same as href props set active class name
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

//type checking
NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
};
