'use strict';
import React from 'react';

import './Header.css';

export class Header extends React.Component {
  render() {
    return(
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-header'>
            <ul className='nav-list'>
              <li><a href='#'>Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}




