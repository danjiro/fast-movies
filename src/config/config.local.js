module.exports = {
  api: {
    env: process.env.REACT_APP_NODE_ENV,
    baseUrl: 'https://cors-anywhere.herokuapp.com/http://www.omdbapi.com',
    key: process.env.REACT_APP_OMDB_API_KEY,
  }
};
