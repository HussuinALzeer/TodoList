 "use client"
import React, { useEffect } from 'react'
import styles from './loader.module.css'

import { LoaderGsap } from '@/gsap/gsap'
import gsap from "gsap";

function Loader() {

    useEffect(() => {
      
        LoaderGsap()

    }, [])
    
    


  return (
    <div className={styles.container} id='LoaderID' >
        <div className= {` ${styles.loaderLine}  ${styles.Line1}`}></div>
        <div className= {` ${styles.loaderLine}  ${styles.Line2}`}></div>
        <div className= {` ${styles.loaderLine}  ${styles.Line3}`}></div>
        <div className= {` ${styles.loaderLine}  ${styles.Line4}`}></div>
        <div className= {` ${styles.loaderLine}  ${styles.Line5}`}></div>
    </div>
  )
}

export default Loader