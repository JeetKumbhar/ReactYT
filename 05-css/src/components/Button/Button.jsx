import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <div className={styles.btns}>
      <button className={styles.btn}>Login</button>
      <button className={styles.btn}>Signin</button>
    </div>
  )
}

export default Button
