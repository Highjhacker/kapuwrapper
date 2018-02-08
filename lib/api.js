var axios = require('axios');

function API(network="main") {
    this.network = network;
}

API.prototype.get = function(endpoint, opts, callback) {
    axios.get(`https://api.kapunode.net/${endpoint}`, {
        params: opts
    })
        .then(response => {
            callback(response.data);
        })
        .catch(err => {
            console.log(err);
        })
};

module.exports = API;