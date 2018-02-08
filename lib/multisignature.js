var API = require('./api');

function MultiSignature(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get pending multi signature transactions.
 * @param publicKey - Valid Kapu public key
 */
MultiSignature.prototype.getPending = function (publicKey, callback) {
    this.api.get("api/multisignatures/pending", {"publicKey": publicKey}, function (response) {
        callback(response);
    });
};

/**
 * Get a list of accounts.
 * @param publicKey - Valid Kapu public key
 */
MultiSignature.prototype.getAccounts = function (publicKey, callback) {
    this.api.get("api/multisignatures/accounts", {"publicKey": publicKey}, function (response) {
        callback(response);
    });
};


module.exports = MultiSignature;