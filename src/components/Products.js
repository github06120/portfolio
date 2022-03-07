import React from 'react'
import './css/Products.css'

import imgkiyo from './img/Kiyomizu.jpg'

class Products extends React.Component {
  render() {
    return <div class='pproducts'>
              <h1 class = 'title'>Products</h1>
              <img src={imgkiyo}></img><a href='https://drive.google.com/file/d/12VtmFuoniIu-nCyRWP3vPWPQ2CFu7pV9/view?usp=sharing'
            >kon</a>
            </div>
  }
}

export default Products