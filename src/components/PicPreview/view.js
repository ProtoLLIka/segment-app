import React from 'react';

import styles from './styles.scss';

const View = ({ image }) => (
  <div className={styles.container}>
    <img src={image} alt="" />
  </div>
);

export default View;
