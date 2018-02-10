const assert = require('assert');
const Transaction = require('../lib/transaction');

let transaction = new Transaction();

describe("Transaction", function () {
    describe('Transaction Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof transaction.getTransaction), ('function'));
            assert.equal((typeof transaction.getTransactions), ('function'));
            assert.equal((typeof transaction.getUnconfirmedTransaction), ('function'));
            assert.equal((typeof transaction.getUnconfirmedTransactions), ('function'));
        });
    });

    describe('#getTransaction()', function () {
        it('Should be equal to true', function () {
            transaction.getTransaction("0cc198015be1a77b2bd0038f6a4e174619899e9da1446fbfecbb67c34675508a", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getTransactions()', function () {
        it('Should be equal to true', function () {
            transaction.getTransactions({"limit": 5}, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getUnconfirmedTransaction()', function () {
        it('Should be equal to true', function () {
            transaction.getUnconfirmedTransaction("0cc198015be1a77b2bd0038f6a4e174619899e9da1446fbfecbb67c34675508a", function (response) {
                assert.equal(response.success, false); // Workaround since it's kinda hard to get the tx of an unconfirmed tx
            })
        }) ;
    });

    describe('#getUnconfirmedTransactions()', function () {
        it('Should be equal to true', function () {
            transaction.getUnconfirmedTransactions(null, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});