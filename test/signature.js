const assert = require('assert');
const Signature = require('../lib/signature');

let signature = new Signature();

describe("Signature", function () {
    describe('Signature Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof signature.getSignatureFee), ('function'));
        });
    });

    describe('#getSignatureFee()', function () {
        it('Should be equal to true', function () {
            signature.getSignatureFee(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});