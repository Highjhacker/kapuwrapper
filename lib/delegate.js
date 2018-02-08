var API = require('./api');

function Delegate(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the count of delegates.
 * @param address - Valid Kapu address
 */
Delegate.prototype.getDelegatesCount = function (address, callback) {
    this.api.get("api/delegates/count", {"address": address}, function (response) {
        callback(response);
    });
};

/**
 * Search for specific delegates.
 * @param query - Query
 * @param opts - Optional parameters, these are ; limit
 */
Delegate.prototype.searchDelegates = function (query, callback) {
    this.api.get("api/delegates/search", query, function (response) {
        callback(response)
    });
};

/**
 * Get a list of voters for a delegate.
 * @param publicKey - Valid Kapu public key
 */
Delegate.prototype.getVoters = function (publicKey, callback) {
  this.api.get("api/delegates/voters", {"publicKey": publicKey}, function (response) {
      callback(response);
  });
};

/**
 * Get a single delegate, by name or public key.
 * @param id - Either a name or a public key, both works.
 */
Delegate.prototype.getDelegate = function (id, callback) {
    if(id.length === 66) {
        this.api.get("api/delegates/get", {"publicKey": id}, function (response) {
            callback(response);
        });
    } else {
        this.api.get("api/delegates/get", {"username": id}, function(response) {
            callback(response);
        });
    }
};

/**
 * Get all delegates.
 * @param opts - Optional parameters, these are ; orderBy, limit, offset
 */
Delegate.prototype.getDelegates = function (opts, callback) {
    this.api.get("api/delegates", opts, function (response) {
        callback(response);
    });
};

/**
 * Get the delegate fee.
 * @param address - Valid Kapu address.
 */
Delegate.prototype.getDelegateFee = function (address, callback) {
    this.api.get("api/delegates/fee", {"address": address}, function (response) {
        callback(response);
    });
};

/**
 * Get the amount of Kapus forged by an account.
 * @param generatorPublicKey - Valid Kapu public Key
 */
Delegate.prototype.getForgedByAccount = function (generatorPublicKey, callback) {
    this.api.get("api/delegates/forging/getForgedByAccount", {"generatorPublicKey": generatorPublicKey}, function (response) {
        callback(response);
    });
};

/**
 * Get the next forger.
 * @param address - Valid Kapu address
 */
Delegate.prototype.getNextForgers = function (address, callback) {
    this.api.get("api/delegates/getNextForgers", {"address": address}, function (response) {
        callback(response);
    });
};

module.exports = Delegate;