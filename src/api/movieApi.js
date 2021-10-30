import config from 'config';

export async function searchMovieTitle(title) {
  const url = `${config.api.baseUrl}/?s=${title}&type=movie&r=json&apikey=${config.api.key}`;
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.log(error);
    return Promise.reject(error.response.data.message);
  }
}
