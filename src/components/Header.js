import React from 'react';
import logo from './logo.svg'
import search from './search.svg'
import shop from './shop.svg'
import menu from './menu.png'

function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo}/>
        <div className='menu-option'>
            <ul>
              <li>MEN</li>
              <li>WOMEN</li>
              <li>KIDS</li>
              <li>CUSTOMIZE</li>
              <li>FAVOURITES</li>
            </ul>
        </div>
        <div className='menu-button'>
            <img className='search' src={search}/>
            <img className='shop' src={shop}/>
            <img className='menu'  src={menu}/>
        </div>
    </div>
  )
}

export default Header