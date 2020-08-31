import React from "react";
import { RichText } from 'prismic-reactjs'
import DocLink from "./DocLink"




/**
 * Site header/nav component
 */
const Navbar = ({ menuLinks = [] }) => (
    <header className="container site-header">
      <Links menuLinks={menuLinks} />
    </header>
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <DocLink link={menuLink.link}>
                {RichText.asText(menuLink.label)}
              </DocLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

export default Navbar;

