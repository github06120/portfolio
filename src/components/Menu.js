import React from 'react';
import {Link} from 'react-router-dom';

import './css/Menu.css'

class Menu extends React.Component {
    
  render() {
    return (
        <div >
            <body>
            <div class="menu">
                <ul class="menu-list">
                <li> 
                    <Link to="/" class='button'>Home</Link>
                    {/* *class="current"> */}
                </li>
                <li>
                    <Link to="/About" class='button'>About</Link>
                </li>
                {/*<li>
                    <Link to="/Products" class='button'>Products</Link>
                </li>*/}
                <li>
                    <Link to="/Access" class='button'>Access</Link>
                </li>
                </ul>
            </div>
            </body>
        </div>
    );
  }
}

export default Menu;