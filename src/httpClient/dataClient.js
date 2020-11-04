import Client from "./client";

const client = new Client({
  baseURL: " ​http://62.210.247.201:9000/",
  headers: {
    "Content-Type": "application/ld+json",
  },
}).getInstance();

export default client;
