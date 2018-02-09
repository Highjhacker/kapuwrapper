var API = require('./api');

function Transaction(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get a single transaction.
 * @param id - Valid Kapu TX id
 */
Transaction.prototype.getTransaction = function (id, callback) {
    this.api.get("api/transactions/get", {"id": id}, function(response) {
        callback(response);
    });
};

/**
 * Get all transactions.
 * @param opts - Optional parameters, these are ; blockId, limit, type, orderBy, offset, senderPublicKey,
 vendorField, ownerPublicKey, ownerADdress, senderId, recipientId, amount, fee
 */
Transaction.prototype.getTransactions = function (opts, callback) {
    this.api.get("api/transactions", opts, function(response) {
        callback(response);
    });
};

/**
 * Get a single unconfirmed transaction.
 * @param id - Valid Kapu TX id
 */
Transaction.prototype.getUnconfirmedTransaction = function (id, callback) {
    this.api.get("api/transactions/unconfirmed/get", {"id": id}, function(response) {
        callback(response);
    });
};

/**
 * Get all unconfirmed transactions.
 * @param opts - Optional parameters, these are ; senderPublicKey, address
 * @param callback
 */
Transaction.prototype.getUnconfirmedTransactions = function (opts, callback) {
    this.api.get("api/transactions/unconfirmed", opts, function(response) {
        callback(response);
    });
};

module.exports = Transaction;