import axios from 'axios';

axios.defaults.baseURL = 'https://hacker-rank-system-node.herokuapp.com/';

const apis = {
  get: axios.get,
  post: axios.post
};

export default apis;
