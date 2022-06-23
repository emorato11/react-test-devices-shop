const API_BASE_URL = `${process.env.REACT_APP_API_ENDPOINT}/api`;

const ApiClient = {
    async get(url) {
      const response = await fetch(`${API_BASE_URL}${url}`);
      return response.json();
    },
  
    async post(url) {
      const response = await fetch(`${API_BASE_URL}${url}`, {method: 'POST'});
      return response.json();
    },
  };
  
  export default ApiClient;