import React from 'react'

import styles from "./noData.module.css"

import noDataPic from "../../../static/noDataPic.svg"

export default function NoData() {
  return (
    <div className={styles.div}>
        <h1 className={styles.title}> No data found </h1>
        <img className={styles.pic} src={noDataPic} alt="" />
    </div>
  )
}
