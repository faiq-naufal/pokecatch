import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

export default function NavLink({ href, children, activeClassName }) {
  const router = useRouter();
  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
};
