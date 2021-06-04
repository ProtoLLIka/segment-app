const getSizeLabel = (size) => {
  const value = Math.round(parseInt(size, 10) / 1024).toFixed(1);

  return `${value} KB`;
};

module.exports = getSizeLabel;
