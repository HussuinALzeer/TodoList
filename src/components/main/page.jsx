import React from 'react'
import styles from './main.module.css'
import List from '../List/page'

function Main() {
  return (
    <div className={styles.container} id='Main' >
      <div className={styles.title} id='Main-title'>
        To do list
      </div>
      <List/>
    </div>
  )
}

export default Main