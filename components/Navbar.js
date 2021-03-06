import React from "react";
import { RichText } from 'prismic-reactjs'
import DocLink from "./DocLink"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import GridLayout from './GridLayout'
import { Box } from 'theme-ui'
import Links from './Links'
import Signin from './Signin'

/**
 * Site header/nav component
 */



class NavBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render(){

    const menuLinks=this.props.menuLinks;
    const logo=this.props.logo;

if(this.state.width>998){

  return(
  <header className="site-header">
  <Box sx={{ bg: 'grey90', p: '1rem' }}>
    <GridLayout className="fort-nav" columns={[1, '1fr 2fr 1fr']}>
      <Box className="company-logo"><img src={logo.url} /></Box>
      <Box><Links menuLinks={menuLinks} /></Box>
      <Box><Signin menuLinks={menuLinks} /></Box>
    </GridLayout>
  </Box>
  </header>
  )
}
else{

return(
  <header className="site-header">
  <Box sx={{ bg: 'grey90', p: '1rem' }}>
    <GridLayout columns={[1, '1fr 2fr 1fr']}>
      <Box><Links menuLinks={menuLinks} /></Box>
      <Box sx={{textAlign: 'center', width:'100%'}}><img src={logo.url} /></Box>
      <Box><Signin menuLinks={menuLinks} /></Box>
    </GridLayout>
  </Box>
  </header>
  )

}
  

}

}


        export default NavBar;

