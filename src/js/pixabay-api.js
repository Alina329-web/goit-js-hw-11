import axios from 'axios';

const API_KEY = '47416764-2d3f1aece90e621ecf55ea406';
const URL = 'https://pixabay.com/api/';

export function back(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetch:', error);
      throw error;
    });
}
