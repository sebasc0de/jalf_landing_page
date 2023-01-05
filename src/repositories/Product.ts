import axios from "axios";
import config from "../config/backend";
import { Product } from "../interfaces/Product";

class ProductRepository implements Repository {
  async getAll(params?: string) {
    try {
      const request = await axios.get(config.PRODUCT.GET_ALL_URL + params);
      const data = request.data.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getById(id: string): Promise<Product> {
    return await axios.get(config.PRODUCT.GET_BY_ID_URL + id);
  }
}

export default new ProductRepository();

// Interfaces #######################

interface GetActions {
  getAll: (params?: string) => Promise<Product[]>;
  getById: (id: string) => Promise<Product>;
}

interface Repository extends GetActions {}
