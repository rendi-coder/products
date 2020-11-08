import request, { GET, POST, PUT, DELETE } from "./fetch";
import { IProductCart } from "../types";

class CartService {
  async getProducts() {
    return await request(GET, "cart");
  }
  async addToCart(product: IProductCart) {
    return await request(POST, "cart", product);
  }
  async setQuantity(productId: string, product: number) {
    return await request(PUT, `cart/${productId}`, product);
  }
  async deleteFromCart(productId: string) {
    return await request(DELETE, `cart/${productId}`);
  }
}

export default new CartService();
