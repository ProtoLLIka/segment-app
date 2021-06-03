import axios from 'axios';

const sendImage = async (file) => {
  const { 0: image, length: filesCount } = file;

  if (!filesCount) {
    return null;
  }

  const data = new FormData();
  data.append('image', image);

  const response = await axios.post(API_URL, data);

  return response;
};

export default sendImage;
