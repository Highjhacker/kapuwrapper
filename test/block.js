const assert = require('assert');
const Block = require('../lib/block');

let block = new Block();

describe("Block", function () {
    describe('Block Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof block.getBlock), ('function'));
            assert.equal((typeof block.getBlocks), ('function'));
            assert.equal((typeof block.getEpoch), ('function'));
            assert.equal((typeof block.getHeight), ('function'));
            assert.equal((typeof block.getNethash), ('function'));
            assert.equal((typeof block.getFee), ('function'));
            assert.equal((typeof block.getFees), ('function'));
            assert.equal((typeof block.getMilestone), ('function'));
            assert.equal((typeof block.getReward), ('function'));
            assert.equal((typeof block.getSupply), ('function'));
            assert.equal((typeof block.getStatus), ('function'));
        });
    });

    describe('#getBlock()', function () {
       it('Should be equal to true', function () {
            block.getBlock("12910338651664878115", function (response) {
                assert.equal(response.success, true);
            })
       }) ;
    });

    describe('#getBlocks()', function () {
        it('Should be equal to true', function () {
            block.getBlocks(null, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getEpoch()', function () {
        it('Should be equal to true', function () {
            block.getEpoch(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getHeight()', function () {
        it('Should be equal to true', function () {
            block.getHeight(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getNethash()', function () {
        it('Should be equal to true', function () {
            block.getNethash(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getFee()', function () {
        it('Should be equal to true', function () {
            block.getFee(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getFees()', function () {
        it('Should be equal to true', function () {
            block.getFees(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getMilestone()', function () {
        it('Should be equal to true', function () {
            block.getMilestone(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getReward()', function () {
        it('Should be equal to true', function () {
            block.getReward(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getSupply()', function () {
        it('Should be equal to true', function () {
            block.getSupply(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getStatus()', function () {
        it('Should be equal to true', function () {
            block.getStatus(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});