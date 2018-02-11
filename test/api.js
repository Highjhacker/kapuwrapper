const assert = require('assert');
const API = require('../lib/api');

let api = new API();

describe("API", function () {
    describe('API Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof api.get), ('function'));
        });
    });

    describe('#get()', function () {
        it('Should be equal to true', function () {
            api.get("api/blocks", {"limit": 1}, function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});