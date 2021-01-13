// Webpack rules for service 
module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/worker/`,
  }
};