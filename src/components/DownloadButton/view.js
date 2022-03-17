import React from 'react';

import FileSaver from 'file-saver';

import styles from './styles.scss';

const dowloadArchive = (zip, fileName) => {
  zip.generateAsync({ type: 'blob' }).then((content) => {
    FileSaver.saveAs(content, `${fileName || 'file'}_chunk.zip`);
  });
};

const View = ({ zip, isParsing, fileInfo }) => (
  <div className={styles.container}>
    <button
      className={styles.btn}
      disabled={`${isParsing}` !== 'false'}
      onClick={() => {
        dowloadArchive(zip, fileInfo.name);
      }}
    >
      Скачать
    </button>
  </div>
);

export default View;
