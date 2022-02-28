import React from 'react'
import './css/Products.css'

import imgkiyo from './img/Kiyomizu.jpg'

class Products extends React.Component {
  render() {
    return <div class='pproducts'>
              <h1 class = 'titl'>Products</h1>
              
              <img src={imgkiyo}></img>
            </div>
  }
}

export default Products