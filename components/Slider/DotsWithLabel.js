import React from 'react'
import { Box } from 'theme-ui'
import { dotStyles, dotLabelStyles } from './styles'

const DotsWithLabel = (index, dotsLabel) => {
  return (
    <Box
      as="button"
      variant="withLabel"
      __css={dotStyles}
      __themeKey="slider.dots"
    >
    </Box>
  )
}

export default DotsWithLabel
