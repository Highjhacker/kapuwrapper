const assert = require('assert');
const Peer = require('../lib/peer');

let peer = new Peer();

describe("MultiSignature", function () {
    describe('MultiSignature Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof peer.getPeer), ('function'));
            assert.equal((typeof peer.getPeers), ('function'));
            assert.equal((typeof peer.getPeerVersion), ('function'));
        });
    });

    describe('#getPeer()', function () {
        it('Should be equal to true', function () {
            peer.getPeer("51.15.201.56", "4600", function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getPeers()', function () {
        it('Should be equal to true', function () {
            peer.getPeers(null, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getPeerVersion()', function () {
        it('Should be equal to true', function () {
            peer.getPeerVersion(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});