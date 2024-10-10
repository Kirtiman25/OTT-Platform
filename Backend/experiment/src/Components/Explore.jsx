import React from 'react'
import ImageSlider from './ImageSlider'

import Horror from './Movies/Horror'
import Romance from './Movies/Romance'
import Anime from './Movies/Anime'

function Contact() {
  return (
    <div>  
      <ImageSlider />
          
          <Horror/>
          <Romance/>
          <Anime/>
     </div>
  )
}

export default Contact