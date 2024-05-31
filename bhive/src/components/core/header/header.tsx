import React from 'react'
import { Contact, Logo } from '../../common';
import styles from './header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Logo />
      <Contact />
    </div>
  )
}
