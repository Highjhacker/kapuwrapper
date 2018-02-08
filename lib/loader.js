var API = require('./api');

function Loader(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get the blockchain status.
 */
Loader.prototype.getStatus = function (callback) {
    this.api.get("api/loader/status", null, function (response) {
        callback(response);
    });
};

/**
 * Get the synchronisation status of the client.
 */
Loader.prototype.getSync = function (callback) {
    this.api.get("api/loader/status/sync", null, function (response) {
        callback(response);
    });
};

/**
 * Auto-configure the client loader
 */
Loader.prototype.autoConfigure = function (callback) {
    this.api.get("api/loader/autoconfigure", null, function (response) {
        callback(response);
    });
};



module.exports = Loader;