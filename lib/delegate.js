var API = require('./api');

function Delegate(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the count of delegates.
 * @param address - Valid Kapu address
 */
Delegate.prototype.getDelegatesCount = function (address) {
    this.api.get("api/delegates/count", {"address": address});
};

/**
 * Search for specific delegates.
 * @param query - Query
 * @param opts - Optional parameters, these are ; limit
 */
Delegate.prototype.searchDelegates = function (query, opts) {
    this.api.get("api/delegates/search", {"q": query, "limit": opts.limit});
};

/**
 * Get a list of voters for a delegate.
 * @param publicKey - Valid Kapu public key
 */
Delegate.prototype.getVoters = function (publicKey) {
  this.api.get("api/delegates/voters", {"publicKey": publicKey});
};

/**
 * Get a single delegate, by name or public key.
 * @param id - Either a name or a public key, both works.
 */
Delegate.prototype.getDelegate = function (id) {
    if(id.length === 66) {
        this.api.get("api/delegates/get", {"publicKey": id});
    } else {
        this.api.get("api/delegates/get", {"username": id});
    }
};

/**
 * Get all delegates.
 * @param opts - Optional parameters, these are ; orderBy, limit, offset
 */
Delegate.prototype.getDelegates = function (opts) {
    this.api.get("api/delegates", opts);
};

/**
 * Get the delegate fee.
 * @param address - Valid Kapu address.
 */
Delegate.prototype.getDelegateFee = function (address) {
    this.api.get("api/delegates/fee", {"address": address});
};

/**
 * Get the amount of Kapus forged by an account.
 * @param generatorPublicKey - Valid Kapu public Key
 */
Delegate.prototype.getForgedByAccount = function (generatorPublicKey) {
    this.api.get("api/delegates/forging/getForgedByAccount", {"generatorPublicKey": generatorPublicKey});
};

/**
 * Get the next forger.
 * @param address - Valid Kapu address
 */
Delegate.prototype.getNextForgers = function (address) {
    this.api.get("api/delegates/getNextForgers", {"address": address});
};

module.exports = Delegate;