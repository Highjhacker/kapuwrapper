const assert = require('assert');
const Account = require('../lib/account');

let account = new Account();

describe("Block", function () {
    describe('Block Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof account.getBalance), ('function'));
            assert.equal((typeof account.getPublicKey), ('function'));
            assert.equal((typeof account.getDelegateFee), ('function'));
            assert.equal((typeof account.getDelegates), ('function'));
            assert.equal((typeof account.getAccounts), ('function'));
            assert.equal((typeof account.getTopAccounts), ('function'));
        });
    });

    describe('#getBalance()', function () {
        it('Should be equal to true', function () {
            account.getBalance("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getPublicKey()', function () {
        it('Should be equal to true', function () {
            account.getPublicKey("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegateFee()', function () {
        it('Should be equal to true', function () {
            account.getDelegateFee(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegates()', function () {
        it('Should be equal to true', function () {
            account.getDelegates("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", null, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getAccounts()', function () {
        it('Should be equal to true', function () {
            account.getAccounts("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    /* The endpoint is broken
    describe('#getTopAccounts()', function () {
        it('Should be equal to true', function () {
            account.getTopAccounts(null, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
    */
});