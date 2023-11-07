import React from 'react'

import styles from "./myButton.module.css"

export default function MyButton({children, color}) {
  return (
      <button className={color === "orange" ? styles.orangeBtn : styles.yellowBtn} onClick={ () => {alert("No such functional yet, sorry")} }>  
        {children} 
      </button>
  )
}
