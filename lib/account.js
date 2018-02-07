var API = require('./api');

function Account(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the balance of an account.
 * @param address - Valid Kapu address
 */
Account.prototype.getBalance = function (address) {
    this.api.get("api/accounts/getBalance", {"address": address});
};

/**
 * Get the public key of an account.
 * @param address - Valid Kapu address
 */
Account.prototype.getPublicKey = function (address) {
    this.api.get("api/accounts/getPublicKey", {"address": address});
};

/**
 * Get the delegate fee of an account.
 */
Account.prototype.getDelegateFee = function () {
    this.api.get("api/accounts/delegates/fee");
};

/**
 * Get the delegates of an account.
 * @param address - Valid Kapu address
 * @param opts - Optional parameters, these are : orderBy, limit, offset
 * Faut réussir à gérer les paramètres optionnels en plus du paramètre requis
 */
Account.prototype.getDelegates = function (address, opts) {
    this.api.get("api/accounts/delegates", {"address": address});
};

/**
 * Return account information of an address.
 * @param address - Valid Kapu address
 */
Account.prototype.getAccounts = function (address) {
    this.api.get("api/accounts", {"address": address});
};

/**
 * Get a list of top accounts.
 * Note : API endpoint broken
 * @param opts - Optional parameters, these are : limit, offset
 */
Account.prototype.getTopAccounts = function (opts) {
    this.api.get("api/accounts/top", opts);
};

module.exports = Account;