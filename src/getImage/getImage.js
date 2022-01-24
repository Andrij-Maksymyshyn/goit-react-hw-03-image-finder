import axios from 'axios';

const KEY = '24382748-1dfb63c81149146d5ea200f75';
const BASE_URL = 'https://pixabay.com/api';

export async function getImage(value, page) {
  try {
    const response =
      await axios.get(`${BASE_URL}/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`);
    return response.data;
  } catch (error) {
    console.error('Whoops, something went wrong:', error);
  }
}
