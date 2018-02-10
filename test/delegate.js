const assert = require('assert');
const Delegate = require('../lib/delegate');

let delegate = new Delegate();

describe("Delegate", function () {
    describe('Delegate Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof delegate.getDelegatesCount), ('function'));
            assert.equal((typeof delegate.searchDelegates), ('function'));
            assert.equal((typeof delegate.getVoters), ('function'));
            assert.equal((typeof delegate.getDelegate), ('function'));
            assert.equal((typeof delegate.getDelegates), ('function'));
            assert.equal((typeof delegate.getDelegateFee), ('function'));
            assert.equal((typeof delegate.getForgedByAccount), ('function'));
            assert.equal((typeof delegate.getNextForgers), ('function'));
        });
    });

    describe('#getDelegatesCount()', function () {
        it('Should be equal to true', function () {
            delegate.getDelegatesCount("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#searchDelegates()', function () {
        it('Should be equal to true', function () {
            delegate.searchDelegates({"q": "dr"}, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getVoters()', function () {
        it('Should be equal to true', function () {
            delegate.getVoters("03b041569251cb673c4c924d5d191a3669b2ba2515e37e37fda3952262a57ec759", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegateWithPublicKey()', function () {
        it('Should be equal to true', function () {
            delegate.getDelegate("03b041569251cb673c4c924d5d191a3669b2ba2515e37e37fda3952262a57ec759", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegateWithName()', function () {
        it('Should be equal to true', function () {
            delegate.getDelegate("thefoundry", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegates() with a limit of 5', function () {
        it('Should be equal to true', function () {
            delegate.getDelegates({"limit": 5}, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getDelegateFee()', function () {
        it('Should be equal to true', function () {
            delegate.getDelegateFee("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getForgedByAccount()', function () {
        it('Should be equal to true', function () {
            delegate.getForgedByAccount("03b041569251cb673c4c924d5d191a3669b2ba2515e37e37fda3952262a57ec759", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getNextForgers()', function () {
        it('Should be equal to true', function () {
            delegate.getNextForgers("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});