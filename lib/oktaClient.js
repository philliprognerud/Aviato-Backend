const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://dev-842835.oktapreview.com",
  token: "00FbP30iAmT3GSD6Bj4DD2vy88rioDcPS2P2n2TxEM"
});

module.exports = client;
