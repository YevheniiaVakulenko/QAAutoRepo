const axios = require('axios');

async function fetchData(url,headers = {}, params = {}) {
    try {
        const response = await axios.get(url, {
            headers: headers,
            params: params
        });
        return response;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else {
            throw new Error(`Error: ${error.message}`);
        }
    }
}

module.exports = fetchData;