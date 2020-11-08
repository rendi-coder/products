import { IProductCart } from "../types";

export const callculateSumCart = (cart: IProductCart[]) =>
  cart.reduce(
    (acc: number, product: IProductCart) =>
      acc + product.price * product.quantity,
    0
  );
