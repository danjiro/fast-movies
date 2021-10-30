import RequestService from 'services/RequestService';
import config from 'config';

const requestService = new RequestService(config.api.baseUrl);

export async function searchMovieTitle(title) {
  const url = `/?s=${title}&type=movie&r=json&apikey=${config.api.key}`;
  try {
    const response = await requestService.get(url);

    return response;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
}
