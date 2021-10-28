import axios from 'axios';

class RequestService {
  constructor(baseUrl) {
    this.axios = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  async post(endpoint, data, token = null) {
    return this.axios.post(endpoint, data, {
      headers: { Authorization: token },
    });
  }

  async patch(endpoint, data, token = null) {
    return this.axios.patch(endpoint, data, {
      headers: { Authorization: token },
    });
  }

  async get(endpoint, token = null, params) {
    return this.axios.get(endpoint, {
      headers: { Authorization: token },
      params,
    });
  }

  async delete(endpoint, data, token = null) {
    return this.axios.delete(endpoint, {
      headers: { Authorization: token },
      data,
    });
  }
}

export default RequestService;
