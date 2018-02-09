var axios = require('axios');

function API(network="main") {
    this.network = network;
}

API.prototype.get = function(endpoint, opts, callback) {
    axios.get(`https://api.kapunode.net/${endpoint}`, {
        params: opts,
        headers: {
            "nethash": "313ea34c8eb705f79e7bc298b788417ff3f7116c9596f5c9875e769ee2f4ede1",
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