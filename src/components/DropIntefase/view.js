import React from 'react';

import DownloadButton from 'components/DownloadButton';
import ParseButton from 'components/ParseButton';

import FileLabel from 'components/FileLabel';
import Loader from 'components/Loader';
import SegmentInput from 'components/SegmentInput';

import styles from './styles.scss';

const View = ({ zip }) => (
  <div className={styles.wrapper}>
    <FileLabel />
    <SegmentInput />
    <ParseButton />
    <div>
      <DownloadButton zip={zip} />
      <Loader />
    </div>
  </div>
);

export default View;
