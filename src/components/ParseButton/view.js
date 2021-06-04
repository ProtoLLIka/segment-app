import React from 'react';

import styles from './styles.scss';

const View = ({ setIsParsing }) => (
  <div>
    <button
      className={styles.btn}
      onClick={() => {
        setIsParsing(true);
      }}
    >
      Сегментировать
    </button>
  </div>
);

export default View;
