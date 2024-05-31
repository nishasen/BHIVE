import React from 'react';
import HeroBackground from '../../../assets/images/heroBackground.png';
import BannerImage from '../../../assets/images/bannerImage.png';
import styles from './mainBanner.module.scss';

export const MainBanner = (): JSX.Element => {
  return (
    <main className={styles.mainBanner}>
      <section className={styles.bannerSection}>
        <img src={BannerImage} alt="" className={styles.banner} />
      </section>
      <section className={styles.titleSection}>
        <img src={HeroBackground} alt="" className={styles.background} />
        <div className={styles.title}>
          <h1>Host your meeting with world-class amenities.</h1>
          <h1>Starting at <span className={styles.price}>₹199/-!</span></h1>
        </div>
      </section>
      
    </main>
  )
}
