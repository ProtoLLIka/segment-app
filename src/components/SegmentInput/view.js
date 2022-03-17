import React from 'react';

import styles from './styles.scss';

const View = ({ cropImageSize, setCropImageSize, value, setValue }) => (
  <div className={styles.container}>
    <div className={styles.block}>
      <span>Размер сегмента:</span>
      <span className={styles.value}>{`${cropImageSize}px`}</span>
    </div>
    <div className={styles.block2}>
      <button
        className={styles.button}
        onClick={() => {
          setCropImageSize(50);
        }}
      >
        50px
      </button>

      <button
        className={styles.button}
        onClick={() => {
          setCropImageSize(100);
        }}
      >
        100px
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setCropImageSize(150);
        }}
      >
        150px
      </button>
      {/* <input
        className={styles.input}
        value={value}
        onChange={({ target: { value: typingValue } }) => {
          setValue(typingValue);
        }}
      />
      <button
        className={styles.button}
        onClick={() => {
          setCropImageSize(parseInt(value, 10));
        }}
      >
        OK
      </button> */}
    </div>
  </div>
);

export default View;
