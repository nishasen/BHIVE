import React from 'react'
import styles from './container.module.scss';
import { TopicHeader } from '../topic-header/topicHeader';

type ContainerProps = {
    header: string,
    children: JSX.Element,
    color: string,
}

export const Container = ({header, children, color} : ContainerProps) => {
  return (
    <div className={styles.container}>
        <TopicHeader header={header} color={color} />
        {children}
    </div>
  )
}
