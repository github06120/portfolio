import React from 'react'
import './css/Access.css'

import insta from './img/ins.png'
import gith from './img/git.png'
import tel from './img/電話.png'

class Access extends React.Component {
  render() {
    return (
      <div class="access">
        <h1 class="renraku">連絡先</h1>
        <a href="tel:080-3771-6763"><img src={tel} className="tel"></img></a>

        <a href="https://www.instagram.com/moon_stone_xyz/" class="name"><img src={insta}className="insta"></img></a>
        
        <a href="https://github.com/github10000000000000" class="name"><img src={gith} class='git'></img></a>

        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }
}

export default Access