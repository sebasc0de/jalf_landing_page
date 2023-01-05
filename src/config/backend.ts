const BASE_URL = "http://localhost:1337";

const backend = {
  BASE_URL,
  AUTH: {
    REGISTER_URL: `${BASE_URL}/api/auth/local/register`,
    LOGIN_URL: `${BASE_URL}/api/auth/local/`,
  },
  PRODUCT: {
    GET_ALL_URL: `${BASE_URL}/api/products?populate=images&`,
    GET_BY_ID_URL: `${BASE_URL}/api/products/`,
  },
};

export default backend;
