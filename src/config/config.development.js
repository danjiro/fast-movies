module.exports = {
  siteName: 'Fast Movies',
  api: {
    env: process.env.REACT_APP_NODE_ENV,
    baseUrl: 'http://www.omdbapi.com',
    key: process.env.REACT_APP_OMDB_API_KEY,
  }
};
