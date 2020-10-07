import React from 'react'
import logo from './images/bloodimg.png'
import '../App.css'
function Header () {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo' />

      <h1>Life Saver</h1>
    </div>
  )
}

export default Header
