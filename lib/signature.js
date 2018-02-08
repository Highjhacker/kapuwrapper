var API = require('./api');

function Signature(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the fee for a signature.
 */
Signature.prototype.getSignatureFee = function (callback) {
    this.api.get("api/signatures/fee", null, function(response) {
        callback(response);
    });
};

module.exports = Signature;