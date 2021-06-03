import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import JSZip from 'jszip';
import 'react-image-crop/dist/ReactCrop.css';

import DownloadButton from 'components/DownloadButton';
import ParseButton from 'components/ParseButton';
import InputFileButton from 'components/InputFileButton';

import styles from './styles.scss';

const zip = new JSZip();

const getCropImagerСoordinates = ({ x, y, picWidth, picHeight, cropImageSize, setIsParsing }) => {
  if (x <= picWidth - cropImageSize) {
    return { x: x + cropImageSize, y };
  }

  if (y <= picHeight - cropImageSize) {
    return { x: 0, y: y + cropImageSize };
  }

  setIsParsing(false);
  return { x, y };
};

const addFile = (canvas, crop) => {
  if (!crop || !canvas) {
    return null;
  }

  canvas.toBlob(
    (blob) => {
      const { files: archiveFiles } = zip;
      const archiveFilesCount = Object.keys(archiveFiles).length;

      zip.file(`${archiveFilesCount}.png`, blob);
    },
    'image/png',
    1,
  );

  return null;
};

const View = ({
  x,
  y,
  picWidth,
  picHeight,
  cropImageSize,
  setСoordinates,
  setPicWidth,
  setPicHeight,
  setIsParsing,
  isParsing,
}) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [loadedImage, setLoadedImage] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: cropImageSize, aspect: 16 / 9 });
  const [completedCrop, setCompletedCrop] = useState(null);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return null;
    }

    if (!picWidth || !picHeight) {
      const {
        current: { width: uploadImageWidth },
        current: { height: uploadImageHeight },
      } = imgRef;

      setPicWidth(uploadImageWidth);
      setPicHeight(uploadImageHeight);
    }

    const { current: image } = imgRef;
    const canvas = previewCanvasRef.current;

    const ctx = canvas.getContext('2d');
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      0,
      0,
      completedCrop.width, //* scaleX,
      completedCrop.height, // * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height,
    );

    if (isParsing) {
      addFile(previewCanvasRef.current, completedCrop);

      const newCropImageCooridantes = getCropImagerСoordinates({
        x,
        y,
        picWidth,
        picHeight,
        cropImageSize,
        setIsParsing,
      });
      setСoordinates(newCropImageCooridantes);
    }
  }, [completedCrop, x, y, isParsing]);

  crop.width = cropImageSize;
  crop.height = cropImageSize;
  crop.x = x;
  crop.y = y;

  return (
    <div>
      <InputFileButton setLoadedImage={setLoadedImage} />
      <ReactCrop
        className={styles.hidden}
        src={loadedImage}
        onImageLoaded={(img) => {
          imgRef.current = img;
        }}
        crop={crop}
        onChange={(cropedImage) => setCrop(cropedImage)}
        onComplete={(cropedImage) => {
          setCompletedCrop(cropedImage);
        }}
      />
      <canvas
        ref={previewCanvasRef}
        className={styles.hidden}
        width={cropImageSize}
        height={cropImageSize}
      />
      <DownloadButton zip={zip} />
      <ParseButton />
    </div>
  );
};

export default View;
