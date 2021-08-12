import React, { useState, useEffect } from 'react'
import { FaChevronCircleDown, FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { showNav, toggleNav } = useGlobalContext()
  const [navName, setNavName] = useState('nav')
  const changeColor = () => {
    let scrollY = window.scrollY
    if (scrollY <= 100) {
      setNavName('nav')
    } else {
      setNavName('nav active')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => window.removeEventListener('scroll', changeColor)
  }, [])
  return (
    <header>
      <nav className={`${navName}`}>
        <div className='logo-cont'>
          <h1>The Town</h1>
        </div>
        <div className='nav-cont'>
          <div className='nav-toggle-items'>
            <FaBars
              className={`${showNav ? 'nav-toggle active' : 'nav-toggle'}`}
              onClick={toggleNav}
            />
          </div>
          <li>
            <a href='/'>Introduction</a>
          </li>
          <li>
            <a href='/'>Our Work</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
        </div>
      </nav>
      <div className='head-text-mid'>
        <h1>The Town</h1>
        <p>Programing Practice</p>
        <p>by Ado Durak</p>
      </div>
      <div className='head-btn-cont'>
        <a href='#intro'>
          <FaChevronCircleDown className='btn-logo' />
        </a>
      </div>
      <div
        className={`${showNav ? 'nav-toggled-div active' : 'nav-toggled-div'} `}
      >
        <li>
          <a href='/'>Introduction</a>
        </li>
        <li>
          <a href='/'>Our Work</a>
        </li>
        <li>
          <a href='/'>Contact Us</a>
        </li>
      </div>
    </header>
  )
}

export default Navbar
