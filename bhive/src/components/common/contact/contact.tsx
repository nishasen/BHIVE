import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import styles from './contact.module.scss';

export const Contact = (): JSX.Element => {
  return (
    <div className={styles.contact} title="Contact Us">
      <FaPhoneAlt />
    </div>
  )
}
