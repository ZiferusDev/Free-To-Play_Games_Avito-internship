import React from 'react'

import styles from "./logo.module.css"
import pacLogo from "../../../static/Logotype.svg"


export default function Logo(props) {
  return (
    <div className={styles.logo}>
        <img className={styles.logotype} alt="Logotype" src={pacLogo} />
        <div className={styles.siteName}>{props.children}</div>
    </div>
  )
}
