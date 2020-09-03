import React from "react";
import { RichText } from 'prismic-reactjs'
import DocLink from "./DocLink"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import GridLayout from './GridLayout'
import { Box } from 'theme-ui'


  const Links = ({menuLinks}) => {
    if (menuLinks) {
      return (

        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          {menuLinks.map((menuLink, index) => {

            if(menuLink.slice_type==="nav_item"){
                if(menuLink.primary.link.url===undefined){
                return (


                <NavDropdown title={menuLink.primary.label[0].text} id={menuLink.primary.label[0].text}>
              

                  {menuLink.items.map((subLink, index) => {

                  return(

                  <DocLink link={subLink.sub_nav_link}>
                  {RichText.asText(subLink.sub_nav_link_label)}
                  </DocLink>

                  )})}

                </NavDropdown>

                )}


                else{

                  return (
         
                    <Nav.Link className="dropdown-item" href={menuLink.primary.link.url}>{RichText.asText(menuLink.primary.label)}</Nav.Link>

                  )}
            }

          })}
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      )
    }
          return null
  }


      

        export default Links