// Define the client configuration
module.exports = {

  // Modify the output directory for production build
  outputDir: `${__dirname}/service/public`,

  // Configure webpack chaining rules
  chainWebpack: config => {

    // Modify the context to be the client folder
    config.context(`${__dirname}/client`);

    // Modify bind the path for the html file
    config.plugin('html').tap(([{ ...params }]) => [{
      ...params, 
      template: `${__dirname}/client/public/index.html`
    }]);

    // Modify the path for all static assets
    config.plugin('copy').use(require('copy-webpack-plugin'), [[{
      from: `${__dirname}/client/public`,
    }]]);
  }
}