import React from 'react';
import styles from './footer.module.scss';

export const Footer = (): JSX.Element => {
  const copyright = "© Copyright 2023. Bhive Private Limited";
  return (
    <div className={styles.footer}>{copyright}</div>
  )
}
