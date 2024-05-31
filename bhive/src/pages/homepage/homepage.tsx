import React from 'react'
import { DownloadAppContainer, FacilitiesContainer, MainBanner, SpacesContainer } from '../../components/core';
import styles from './homepage.module.scss';

export const Homepage = (): JSX.Element => {
  return (
    <div className={styles.homepage}>
      <MainBanner />
      <FacilitiesContainer />
      <SpacesContainer />
      <DownloadAppContainer />
    </div>
  )
}
