import axios from 'axios';

class RPCClient {
    constructor(serverUrl) {
        this.serverUrl = serverUrl;
        this.requestId = 1;
    }

    async invoke(method, param) {
        try {
            const response = await axios.post(this.serverUrl, { number: param });
            if (response.data.error) {
                throw new Error(response.data.error);
            }
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || error.message);
        }
    }
}

export default RPCClient;
