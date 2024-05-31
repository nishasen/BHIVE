import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  title: string,
  header: string,
  icon: JSX.Element,
}

export const Button = ({title, header, icon}: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>
        <span className={styles.header}>{header}</span>
        <span>{title}</span>
      </div>
    </button>
  )
}
