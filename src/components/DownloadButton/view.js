import React from 'react';

import FileSaver from 'file-saver';

const dowloadArchive = (zip) => {
  zip.generateAsync({ type: 'blob' }).then((content) => {
    FileSaver.saveAs(content, 'download.zip');
  });
};

const View = ({ zip }) => (
  <div>
    <button
      onClick={() => {
        sendImage();
      }}
    >
      Скачать
    </button>
  </div>
);

export default View;
