import React from 'react';
import CompanyLogo from '../../../assets/images/logo.svg';
import styles from './logo.module.scss';

export const Logo = (): JSX.Element => {
  return (
      <img src={CompanyLogo} alt="" className={styles.logo} />
  )
}
