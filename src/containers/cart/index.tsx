import React, { useEffect } from "react";
import { CartContainer, ProductsLsit, SumCart, Title } from "./styles";
import CartService from "../../services/cart.service";
import ProductService from "../../services/product.service";
import Card from "../product-card";
import { useStore } from "../../store-context/storeContext";
import { IProductCart } from "../../types";
import { reduceNumber } from "../../helpers/reduceNumber";

const Cart = () => {
  const { CART_VIEW } = Object(useStore());
  const {
    actions: { initCart, deleteProductFromCart, setQuantity },
    state: { cart, sumCart },
  } = CART_VIEW;

  useEffect(() => {
    (async () => {
      initCart(await CartService.getProducts());
    })();
    // eslint-disable-next-line
  }, []);

  const setQuantityHandler = async (id: string, quantity: number) => {
    const updatedProduct = cart.find((p: IProductCart) => p.id === id);
    await CartService.setQuantity(id, { ...updatedProduct, quantity });
    setQuantity({ id, quantity });
  };

  const deleteProduct = async (id: string) => {
    const updatedProduct = cart.find((p: IProductCart) => p.id === id);
    delete updatedProduct.quantity;
    await CartService.deleteFromCart(id);
    await ProductService.updateProduct({
      ...updatedProduct,
      inCart: false,
    });
    deleteProductFromCart(id);
  };

  return (
    <CartContainer>
      <Title>Basket</Title>
      {cart.length > 0 ? (
        <>
          <ProductsLsit>
            {cart.map((product: IProductCart) => {
              return (
                <Card
                  key={product.id}
                  cardInfo={product}
                  incrementQuantity={setQuantityHandler}
                  decrementQuantity={setQuantityHandler}
                  deleteFromCart={deleteProduct}
                />
              );
            })}
          </ProductsLsit>
          <SumCart>
            <div className="text">The Total Sum</div>
            <div className="sum">{reduceNumber(sumCart)}$</div>
          </SumCart>
        </>
      ) : (
        <div className="empty-cart">Cart is empty</div>
      )}
    </CartContainer>
  );
};

export default Cart;
