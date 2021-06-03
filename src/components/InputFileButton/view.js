import React from 'react';

import sendImage from 'api/sendImage';

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
      sendImage(files);
    }}
  />
);

export default View;
