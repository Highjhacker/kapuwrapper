var API = require('./api');

function Account(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the balance of an account.
 * @param address - Valid Kapu address
 */
Account.prototype.getBalance = function (address, callback) {
    this.api.get("api/accounts/getBalance", {"address": address}, function(response) {
        callback(response);
    });
};

/**
 * Get the public key of an account.
 * @param address - Valid Kapu address
 */
Account.prototype.getPublicKey = function (address, callback) {
    this.api.get("api/accounts/getPublicKey", {"address": address}, function(response) {
        callback(response);
    });
};

/**
 * Get the delegate fee of an account.
 */
Account.prototype.getDelegateFee = function (callback) {
    this.api.get("api/accounts/delegates/fee", null, function (response) {
        callback(response);
    });
};

/**
 * Get the delegates of an account.
 * @param address - Valid Kapu address
 * @param opts - Optional parameters, these are : orderBy, limit, offset
 * Faut réussir à gérer les paramètres optionnels en plus du paramètre requis
 * Pas sûr de l'implémentation right now, à vérifier plus tard.
 */
Account.prototype.getDelegates = function (address, opts, callback) {
    this.api.get("api/accounts/delegates", {"address": address, opts}, function (response) {
        callback(response);
    });
};

/**
 * Return account information of an address.
 * @param address - Valid Kapu address
 */
Account.prototype.getAccounts = function (address, callback) {
    this.api.get("api/accounts", {"address": address}, function (response) {
        callback(response);
    });
};

/**
 * Get a list of top accounts.
 * Note : API endpoint broken
 * @param opts - Optional parameters, these are : limit, offset
 */
Account.prototype.getTopAccounts = function (opts, callback) {
    this.api.get("api/accounts/top", opts, function (response) {
        callback(response);
    });
};

module.exports = Account;