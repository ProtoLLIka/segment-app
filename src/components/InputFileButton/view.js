import React from 'react';
import Dropzone from 'react-dropzone';

import cloudImage from 'assets/png/cloud.png';

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
            <p>Drag drop some files here, or click to select files</p>
            <img className={styles.img} src={cloudImage} alt="upload" />
          </div>
        </section>
      )}
    </Dropzone>
  </div>
);

export default View;
