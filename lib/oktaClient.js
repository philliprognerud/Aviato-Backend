const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-842835.oktapreview.com',
  token: '001uzEc43QzZbBeXW3WE5xRP7sSvKtxq5KjJYWSPNE'
});

module.exports = client;