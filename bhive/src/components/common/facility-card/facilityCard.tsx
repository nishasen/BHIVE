import React from 'react';
import styles from './facilityCard.module.scss';

type FacilityCardProps = {
  facility: string,
  id: number,
  icon: JSX.Element,
}

export const FacilityCard = ({facility, id, icon}: FacilityCardProps): JSX.Element => {
  return (
    <div key={id} className={styles.facilityCard}>{icon}{facility}</div>
  )
}
