import React from 'react';

import FileSaver from 'file-saver';

import styles from './styles.scss';

const dowloadArchive = (zip) => {
  zip.generateAsync({ type: 'blob' }).then((content) => {
    FileSaver.saveAs(content, 'download.zip');
  });
};

const View = ({ zip, isParsing }) => (
  <div>
    <button
      className={styles.btn}
      disabled={`${isParsing}` !== 'false'}
      onClick={() => {
        dowloadArchive(zip);
      }}
    >
      Скачать
    </button>
  </div>
);

export default View;
