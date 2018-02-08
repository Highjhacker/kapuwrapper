var API = require('./api');

function Block(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get block by id.
 * @param id - A valid Block id
 */
Block.prototype.getBlock = function (id, callback) {
    this.api.get("api/blocks/get", {"id": id}, function(response) {
        callback(response);
    });
};

/**
 * Get all blocks.
 * Note : Maybe look at streams for that ?
 * @param opts - Optional parameters, these are : limit, orderBy, offset, generatorPublicKey, totalAmount, totalFee,
 * reward, previousBlock, height
 */
Block.prototype.getBlocks = function(opts, callback) {
    this.api.get("api/blocks", opts, function(response) {
       callback(response);
    });
};

/**
 * Get the blockchain epoch.
 */
Block.prototype.getEpoch = function(callback) {
    this.api.get("api/blocks/getEpoch", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain height.
 */
Block.prototype.getHeight = function(callback) {
    this.api.get("api/blocks/getHeight", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain nethash.
 */
Block.prototype.getNethash = function(callback) {
    this.api.get("api/blocks/getNethash", null, function(response) {
        callback(response);
    });
};

/**
 * Get the transaction fee for sending "normal" transactions.
 */
Block.prototype.getFee = function(callback) {
    this.api.get("api/blocks/getFee", null, function(response) {
        callback(response);
    });
};

/**
 * Get the network fees.
 */
Block.prototype.getFees = function(callback) {
    this.api.get("api/blocks/getFees", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain milestone.
 */
Block.prototype.getMilestone = function(callback) {
    this.api.get("api/blocks/getMilestone", null, function(response) {
        callback(response)
    });
};

/**
 * Get the blockchain reward.
 */
Block.prototype.getReward = function(callback) {
    this.api.get("api/blocks/getReward", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain supply.
 */
Block.prototype.getSupply = function(callback) {
    this.api.get("api/blocks/getSupply", null, function(response) {
        callback(response);
    });
};

/**
 * Get the blockchain status.
 */
Block.prototype.getStatus = function(callback) {
    this.api.get("api/blocks/getStatus", null, function(response) {
        callback(response);
    });
};

module.exports = Block;