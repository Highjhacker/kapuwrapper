var axios = require('axios');

function API(network="main") {
    this.network = network;
}

API.prototype.get = function(endpoint, opts) {
    axios.get(`https://api.kapunode.net/${endpoint}`, {
        params: opts
    })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(response, error) {
            console.log(response);
            console.log(error);
        })
};

module.exports = API;