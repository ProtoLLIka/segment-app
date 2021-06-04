import React from 'react';

import styles from './styles.scss';

const getSizeLabel = (size) => {
  const value = Math.round(parseInt(size, 10) / 1024).toFixed(1);

  return `${value} KB`;
};

const View = ({ fileInfo }) => {
  if (!fileInfo) {
    return null;
  }

  const { name, size } = fileInfo;
  const calcSize = size ? getSizeLabel(size) : null;

  return (
    <div className={styles.block}>
      <span className={styles.name}>{name}</span>
      <span className={styles.size}>{calcSize}</span>
    </div>
  );
};
export default View;
