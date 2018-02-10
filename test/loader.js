const assert = require('assert');
const Loader = require('../lib/loader');

let loader = new Loader();

describe("Loader", function () {
    describe('Loader Functions()', function () {
        it('should be functions', function () {
            assert.equal((typeof loader.getStatus), ('function'));
            assert.equal((typeof loader.getSync), ('function'));
            assert.equal((typeof loader.autoConfigure), ('function'));
        });
    });

    describe('#getStatus()', function () {
        it('Should be equal to true', function () {
            loader.getStatus(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#getSync()', function () {
        it('Should be equal to true', function () {
            loader.getSync(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });

    describe('#autoConfigure()', function () {
        it('Should be equal to true', function () {
            loader.autoConfigure(function (response) {
                assert.equal(response.success, true);
            })
        }) ;
    });
});