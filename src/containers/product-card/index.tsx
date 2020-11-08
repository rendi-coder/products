import React from "react";
import { CardWrapper, CardContainer } from "./styles";
import { ICard, TSetValue } from "../../types";
import { reduceNumber } from "../../helpers/reduceNumber";
import Button from "../../components/shared/button";

const Card: React.FC<{
  cardInfo: ICard;
  editCard?: TSetValue;
  addToCart?: any;
  deleteCard?: TSetValue;
  incrementQuantity?: (id: string, quantity: number) => void;
  decrementQuantity?: (id: string, quantity: number) => void;
  deleteFromCart?: TSetValue;
}> = ({
  cardInfo,
  editCard,
  addToCart,
  deleteCard,
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
}) => {
  return (
    <CardWrapper>
      <CardContainer>
        <div className="title">{cardInfo.title}</div>
        <div className="price">{reduceNumber(cardInfo.price)}$</div>
        <div className="description">{cardInfo.description}</div>
      </CardContainer>
      {editCard && addToCart && deleteCard && (
        <div className="action-list">
          <Button
            width={"50px"}
            height={"32px"}
            className="edit"
            onClick={() => editCard(cardInfo.id)}
          >
            <span>Edit</span>
          </Button>
          <Button
            width={"55px"}
            height={"32px"}
            className="delete"
            onClick={() => deleteCard(cardInfo.id)}
          >
            <span>Delete</span>
          </Button>
          <Button
            width={"80px"}
            height={"32px"}
            className="add"
            disabled={cardInfo.inCart}
            onClick={() => {
              if (!cardInfo.inCart) {
                const { id, title, description, price } = cardInfo;
                addToCart({ id, title, description, price });
              }
            }}
          >
            <span>AddToCart</span>
          </Button>
        </div>
      )}
      {incrementQuantity && decrementQuantity && deleteFromCart && (
        <div className="action-cart">
          <div className="quantity">{cardInfo.quantity}</div>
          <div className="action">
            <Button
              width={"50px"}
              height={"32px"}
              className="edit"
              onClick={() =>
                cardInfo.quantity &&
                incrementQuantity(cardInfo.id, cardInfo.quantity + 1)
              }
            >
              <span>+1</span>
            </Button>
            <Button
              width={"55px"}
              height={"32px"}
              className="delete"
              onClick={() => deleteFromCart(cardInfo.id)}
            >
              <span>Delete</span>
            </Button>
            <Button
              width={"50px"}
              height={"32px"}
              className="add"
              disabled={cardInfo.inCart}
              onClick={() =>
                cardInfo.quantity &&
                cardInfo.quantity > 1 &&
                decrementQuantity(cardInfo.id, cardInfo.quantity - 1)
              }
            >
              <span>-1</span>
            </Button>
          </div>
        </div>
      )}
    </CardWrapper>
  );
};

export default Card;
