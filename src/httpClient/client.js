import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";

const commonOptions = {
  baseURL: null,
  headers: {},
};

class Client {
  client = null;

  options = {};

  constructor(customOptions = {}) {
    this.options = merge(commonOptions, customOptions);

    this.client = axios.create(this.options);
    this.client.interceptors.request.use(async (paramConfig) => {
      const config = cloneDeep(paramConfig);


      return config;
    });
  }

  getInstance() {
    return this.client;
  }
}

export default Client;
