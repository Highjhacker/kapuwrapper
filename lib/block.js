var API = require('./api');

function Block(network="main") {
    this.network = network;
    this.api = new API(this.network);
}

/**
 * Get block by id.
 * @param id - A valid Block id
 */
Block.prototype.getBlock = function (id) {
    this.api.get("api/blocks/get", {"id": id});
}

/**
 * Get all blocks.
 * Note : Maybe look at streams for that ?
 * @param opts - Optional parameters, these are : limit, orderBy, offset, generatorPublicKey, totalAmount, totalFee,
 * reward, previousBlock, height
 */
Block.prototype.getBlocks = function(opts) {
    this.api.get("api/blocks", opts)
}

/**
 * Get the blockchain epoch.
 */
Block.prototype.getEpoch = function() {
    this.api.get("api/blocks/getEpoch");
}

/**
 * Get the blockchain height.
 */
Block.prototype.getHeight = function() {
    this.api.get("api/blocks/getHeight");
}

/**
 * Get the blockchain nethash.
 */
Block.prototype.getNethash = function() {
    this.api.get("api/blocks/getNethash")
}

/**
 * Get the transaction fee for sending "normal" transactions.
 */
Block.prototype.getFee = function() {
    this.api.get("api/blocks/getFee")
}

/**
 * Get the network fees.
 */
Block.prototype.getFees = function() {
    this.api.get("api/blocks/getFees")
}

/**
 * Get the blockchain milestone.
 */
Block.prototype.getMilestone = function() {
    this.api.get("api/blocks/getMilestone")
}

/**
 * Get the blockchain reward.
 */
Block.prototype.getReward = function() {
    this.api.get("api/blocks/getReward")
}

/**
 * Get the blockchain supply.
 */
Block.prototype.getSupply = function() {
    this.api.get("api/blocks/getSupply")
}

/**
 * Get the blockchain status.
 */
Block.prototype.getStatus = function() {
    this.api.get("api/blocks/getStatus");
}

module.exports = Block;