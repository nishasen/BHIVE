import React from 'react';
import { Footer, Header } from '../../core';
import { RouteProvider } from '../../../router/routeProvider';
import styles from './layout.module.scss';

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <RouteProvider />
      <Footer />
    </div>
  )
}
