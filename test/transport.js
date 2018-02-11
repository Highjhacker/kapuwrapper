const assert = require('assert');
const Transport = require('../lib/transport');

let transport = new Transport();

describe("Transport", function () {
    describe('Transport Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof transport.getPeers), ('function'));
            assert.equal((typeof transport.getCommonBlocks), ('function'));
            assert.equal((typeof transport.getBlock), ('function'));
            assert.equal((typeof transport.getBlocks), ('function'));
            assert.equal((typeof transport.getTransactions), ('function'));
            assert.equal((typeof transport.postTransaction), ('function'));
            assert.equal((typeof transport.getTransactionsFromIds), ('function'));
            assert.equal((typeof transport.getHeight), ('function'));
            assert.equal((typeof transport.getStatus), ('function'));
        });
    });

    describe('#getPeers()', function () {
        it('Should be equal to true', function () {
            transport.getPeers(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    // Need to redo the function
    describe('#getCommonBlocks()', function () {
        it('Should be equal to true', function () {
            transport.getCommonBlocks("12664557175787913380, 1962108815212954419", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    /* Doesn't work
    describe('#getBlock()', function () {
        it('Should be equal to true', function () {
            transport.getBlock("KAxffcDxsSeQVEKarxDB5rpCGA5xThg635", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
    */

    describe('#getBlocks()', function () {
        it('Should be equal to true', function () {
            transport.getBlocks("KAxffcDxsSeQVEKarxDB5rpCGA5xThg635", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getTransactions()', function () {
        it('Should be equal to true', function () {
            transport.getTransactions(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    /* Not yet implemented
    describe('#postTransaction()', function () {
        it('Should be equal to true', function () {
            transport.postTransaction(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
    */

    // Need to redo the function
    describe('#getTransactionsFromIds()', function () {
        it('Should be equal to true', function () {
            transport.getTransactionsFromIds("0cc198015be1a77b2bd0038f6a4e174619899e9da1446fbfecbb67c34675508a", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getHeight()', function () {
        it('Should be equal to true', function () {
            transport.getHeight(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getStatus()', function () {
        it('Should be equal to true', function () {
            transport.getStatus(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});