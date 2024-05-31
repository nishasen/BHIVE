import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './topicHeader.module.scss';
import { COLORS } from '../../../assets/styles/colors';

type TopicHeaderProps = {
  header: string,
  color: string,
}

export const TopicHeader = ({header, color}: TopicHeaderProps): JSX.Element => {
  return (
    <h2 className={styles.topicHeader} style={{color: color}}>
      {header}
      <span className={styles.arrow}><FaLongArrowAltRight size={25} /></span>
    </h2>
  )
}
