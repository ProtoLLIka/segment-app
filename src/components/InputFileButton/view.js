import React from 'react';

const selectFileHandler = (files, setLoadedImage) => {
  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.addEventListener('load', () => setLoadedImage(reader.result));
    reader.readAsDataURL(files[0]);
  }
};

const View = ({ setLoadedImage }) => (
  <input
    type="file"
    accept="image/*"
    onChange={({ target: { files } }) => {
      selectFileHandler(files, setLoadedImage);
    }}
  />
);

export default View;
