import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>This is a Navbar</h1>
      <div className="options">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
