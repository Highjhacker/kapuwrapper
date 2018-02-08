var API = require('./api');

function Peer(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get a single peer.
 * @param ip - Address ip of the peer
 * @param port - Port of the peer
 */
Peer.prototype.getPeer = function (ip, port, callback) {
    this.api.get("api/peers/get", {"ip": ip, "port": port}, function(response) {
        callback(response);
    });
};

/**
 * Get all peers.
 * The optional parameters doesn't works ATM, even on the Swagger API.
 * @param opts - Optional parameters, these are ; port, state, os, version, orderBy, limit, offset
 */
Peer.prototype.getPeers = function (opts, callback) {
    this.api.get("api/peers", opts, function(response) {
        callback(response);
    });
};

/**
 * Get the peer version.
 */
Peer.prototype.getPeerVersion = function (callback) {
    this.api.get("api/peers/version", function(response) {
        callback(response);
    });
};

module.exports = Peer;