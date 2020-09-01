import React from 'react';
import { array, shape, func } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import uuid from 'react-uuid'

import { Card, Desc, Eyebrow, Slider, Slice, Wrap, Button } from '../../components'

class MySlice extends React.Component{

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

    const {slice, linkResolver} = this.props
    const { primary, items } = slice
    const settings = {
      dots: true,
      dotsWithLabel: true,
      arrows: false,
      draggable: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 200,
      fade: true,
      cssEase: 'linear'
    }



    return (
      <Slice className="hero_carousal" sx={{ 'max-width': '100%', 'width': '100%', 'padding-top': '0px'}}>
      <Wrap sx={{ textAlign: ['left', null, 'center'], 'max-width': '100% !important', 'width': '100% !important', 'padding-top': '0px' }}>

                <Box sx={{ width: 'full', maxWidth: '100vw' }}>
          <Slider {...settings}>
          {items.map((item) =>{

            let carousal_imageurl='';
           if(this.state.width>0 &&this.state.width<=767.98){
             carousal_imageurl=item.image.Mobile.url;

           }
          else if(this.state.width>767.98 &&this.state.width<=1083){
             carousal_imageurl=item.image.Tablet.url;

           }
           else if(this.state.width>1083 &&this.state.width<1400){
             carousal_imageurl=item.image.LowerDesktop.url;

           }
           else{
             carousal_imageurl=item.image.url;
           }

           return (
           <Box key={uuid()}>
          
            <Box
              as="figure"
              sx={{
              img: {
              width: 'full',
              }, 'position': 'relative',
              'text-align': 'left'
              }}
            >
              <Box
              as="img"
              src={carousal_imageurl}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              sx={{ mx: 'auto', mb: 'large', 'max-width': '100%' }}
              />
          
            </Box>

            <Box as="section" className="container carousal-data">
              <Box sx={{'position': 'absolute', 'top': '50%', 'left': '30%', 'transform': 'translate(-50%, -50%)', 'max-width': '40%'}}>

                <Box as="h1" sx={{ fontSize: 'base', mb: 'small' }}>
                {RichText.asText(item.title)}
                </Box>
              
                <Box sx={{ fontWeight: 'lean' }}>
                <RichText render={item.content} />
                </Box>

                <Box className="hero_button">
                <Button
                label={item.button_label}
                link={item.button_link}
                resolver={linkResolver}
                variant="item"
                sx={{'padding-left':'0px'}}
                />
                </Box>
              
              </Box>
              

            </Box>
          
          </Box>
          )})}
          </Slider>
          </Box>
          </Wrap>
          </Slice>

          )

        }
      }



      MySlice.propTypes = {
        slice: PropTypes.shape({
          primary: PropTypes.shape({
            eyebrow_headline: PropTypes.array,
            title: PropTypes.array,
            description: PropTypes.array,
          }).isRequired,
          items: PropTypes.array.isRequired,
        }).isRequired,
        linkResolver: func,
      }

      MySlice.defaultProps = {
        linkResolver: () => {
          return '/404'
        },

      }

      export default MySlice;
