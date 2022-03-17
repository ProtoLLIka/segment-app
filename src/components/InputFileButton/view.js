import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './styles.scss';

const selectFileHandler = ({ files, setLoadedImage, setFileInfo }) => {
  if (files && files.length > 0) {
    const reader = new FileReader();
    const [file] = files;
    reader.addEventListener('load', () => setLoadedImage(reader.result));
    reader.readAsDataURL(file);
    setFileInfo({ name: file.name, size: file.size });
  }
};

const View = ({ setLoadedImage, setFileInfo }) => (
  <div className={styles.dropzone}>
    <Dropzone
      onDrop={(acceptedFiles) => {
        selectFileHandler({ files: acceptedFiles, setLoadedImage, setFileInfo });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop your files here </p>
            <span>OR</span>
            <button className={styles.loadButton}>Browse File</button>
          </div>
        </section>
      )}
    </Dropzone>
  </div>
);

export default View;
