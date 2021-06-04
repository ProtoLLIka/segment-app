import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './styles.scss';

const View = ({ isParsing }) => {
  if (!isParsing) {
    return null;
  }

  return (
    <div className={styles.background}>
      <Loader color="grey" />
    </div>
  );
};

export default View;
