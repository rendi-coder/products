import { ICreateCard } from "../types/index";
import request, { GET, POST, PUT, DELETE } from "./fetch";

class ProducService {
  async getProducts() {
    return await request(GET, "products");
  }
  async addProduct(product: ICreateCard) {
    delete product.id;
    return await request(POST, "products", product);
  }
  async updateProduct(product: ICreateCard) {
    const productId = product.id;
    delete product.id;
    return await request(PUT, `products/${productId}`, product);
  }
  async deleteProduct(productId: string) {
    return await request(DELETE, `products/${productId}`);
  }
}

export default new ProducService();
