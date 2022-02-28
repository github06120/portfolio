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
                    {/* *class="current"> */}
                    <Link to="/" class='button'>Home</Link>
                </li>
                <li>
                    <Link to="/Products" class='button'>Products</Link>
                </li>
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