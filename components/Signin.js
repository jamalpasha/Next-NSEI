import React from "react";
import { RichText } from 'prismic-reactjs'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from './Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import GridLayout from './GridLayout'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { array, shape, func } from 'prop-types';

  const Signin = ({menuLinks,linkResolver}) => {
    if (menuLinks) {
      return (
        <Navbar style={{float:'right'}}>
          {menuLinks.map((menuLink, index) => {

            if(menuLink.slice_type==="sign_in"){
              return(
                <Box className="signin_button">
                  <Button
                  label={menuLink.primary.button_label}
                  link={menuLink.primary.button_link.url}
                  resolver={linkResolver}
                  variant="item"
                  sx={{'padding-left':'0px'}}
                  />
                </Box>
              )
            }
          })}
          </Navbar>
      )
    }
          return null
  }

Signin.propTypes = {
        
        linkResolver: func,
      }

      Signin.defaultProps = {
        linkResolver: () => {
          return '/404'
        },

      }

      

        export default Signin