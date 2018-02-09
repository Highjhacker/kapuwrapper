var API = require('./api');

function Transport(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get a list of peers.
 */
Transport.prototype.getPeers = function (callback) {
    this.api.get("peer/list", null, function(response) {
        callback(response);
    });
};

// A gérer les ids via un join ou quoi
/**
 * Get a list of blocks by ids.
 * @param ids - Valid list of tx id
 */
Transport.prototype.getCommonBlocks = function (ids, callback) {
    this.api.get("peer/blocks/common", {"ids": ids}, function(response) {
        callback(response);
    });
};

/**
 * Get all blocks.
 * @param address - Valid Kapu address ?
 */
Transport.prototype.getBlocks = function (address, callback) {
    this.api.get("peer/blocks", {"address": address}, function(response) {
        callback(response);
    });
};

/**
 * Get a single block.
 *
 * Note : Doesn't work, even the curl from the official API documentation doesn't works. Plus, a block and a address ??
 *
 * @param address - Valid Kapu address (I guess ?)
 */
Transport.prototype.getBlock = function (address, callback) {
    this.api.get("peer/block", {"address": address}, function(response) {
        callback(response);
    });
};

/**
 * Get a list of transactions.
 */
Transport.prototype.getTransactions = function (callback) {
    this.api.get("peer/transactions", null, function(response) {
        callback(response);
    });
};

// A implémenter, d'abord via arkjs puis ici (ou même copier coller direct juste ce qu'il nous faut)
/**
 * Create a new transaction.
 * @param transaction - Valid transaction object
s */
Transport.prototype.postTransaction = function (transaction, callback) {
    this.api.get("peer/transactions", transaction, function(response) {
        callback(response);
    });
};

// A gérer les ids via un join ou quoi
/**
 * Get a list of transactions by ids.
 * @param ids - Valid list of tx id
 */
Transport.prototype.getTransactionsFromIds = function (ids, callback) {
    this.api.get("peer/transactionsFromIds", {"ids": ids}, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain height.
 */
Transport.prototype.getHeight = function (callback) {
    this.api.get("peer/height", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain status.
 */
Transport.prototype.getStatus = function (callback) {
    this.api.get("peer/status", null, function(response) {
        callback(response);
    });
};

module.exports = Transport;