import React from 'react';

const View = ({ setIsParsing }) => (
  <div>
    <button
      onClick={() => {
        setIsParsing(true);
      }}
    >
      Сегментировать
    </button>
  </div>
);

export default View;
