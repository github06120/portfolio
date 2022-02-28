import React from 'react'
import './css/Access.css'

import insta from './img/ins.png'
import gith from './img/git.png'

class Access extends React.Component {
  render() {
    return (
      <div class="access">
          <h1 >連絡先</h1>
        <img src={insta}></img>
        <a href="https://www.instagram.com/moon_stone_xyz/" class="name">instagram</a>
        <img src={gith} class='git'></img>
        <a href="https://github.com/github10000000000000" class="name">github</a>
      </div>
    );
  }
}

export default Access