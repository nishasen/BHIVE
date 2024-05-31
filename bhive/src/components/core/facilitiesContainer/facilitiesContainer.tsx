import React from 'react';
import styles from './facilitiesContainer.module.scss';
import { Container, FacilityCard } from '../../common';
import { facilities } from '../../../constants/facilities';
import { COLORS } from '../../../assets/styles/colors';

export const FacilitiesContainer = (): JSX.Element => {
  const header = "Why Choose us?";
  return (
    <Container header={header} color={COLORS.$text_main}>
      <div className={styles.facilitiesContainer}>
      {facilities.map(({id, facility, icon}) => 
        <FacilityCard icon={icon} key={id} facility={facility} id={id} />)}
      </div>
    </Container>
  )
}
