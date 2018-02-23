const bs58 = require('bs58check');

function Helpers() {

}


Helpers.prototype.validateAddress = function(address, version) {
        // Need to find a better way to handle it for when multiple version will exists, but for now it's okay.
        if(!version) {
            version = 0x2D;
        }
        try {
            const decode = bs58.decode(address);
            return decode[0] == version;
        }
        catch(err) {
            return false;
        }
};

module.exports = Helpers;