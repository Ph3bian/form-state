import React from 'react'
import styles from './layout.module.scss'
import { Bg } from '../../assets/svg'

export const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <div className={styles.LayoutBg}>
      <Bg />
    </div>
    <div className={styles.LayoutContent}> {children}</div>
  </div>
)
export default Layout
