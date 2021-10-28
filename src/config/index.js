const { REACT_APP_NODE_ENV } = process.env;
// eslint-disable-next-line import/no-dynamic-require
const config = require(`config/config.${REACT_APP_NODE_ENV}.js`);

export default config;
