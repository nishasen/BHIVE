import React from 'react';
import Download from '../../../assets/images/download.svg';
import styles from './downloadAppContainer.module.scss';
import { Button, Container } from '../../common';
import { COLORS } from '../../../assets/styles/colors';
import { downloadButtons } from '../../../constants/downloadButton';

export const DownloadAppContainer = (): JSX.Element => {
  const downloadText = "Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.";
  const header = "Download our app now"
  return (
    <Container header={header} color={COLORS.$grey_3}>
      <div className={styles.downloadContainer}>
        <img src={Download} alt="" className={styles.downloadImage}/>
        <div className={styles.titleContainer}>
          <div className={styles.titleBox}>
            <span className={styles.title}>{downloadText}</span>
            <div className={styles.downloadAction}>
              {downloadButtons.map(({id, title, header, icon}) => 
                    <Button key={id} title={title} header={header} icon={icon} />)}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
