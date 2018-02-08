var axios = require('axios');

function API(network="main") {
    this.network = network;
}

API.prototype.get = function(endpoint, opts, callback) {
    axios.get(`https://api.kapunode.net/${endpoint}`, {
        params: opts,
        headers: {
            "nethash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
            "port": "4001",
            "version": "1.0.1"
        }
    })
        .then(response => {
            callback(response.data);
        })
        .catch(err => {
            console.log(err);
        })
};

module.exports = API;