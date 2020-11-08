import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 50px 0;
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  .empty-cart {
    margin-top: 100px;
    font-size: 30px;
    color: #b240e4;
    font-family: "Roboto", sans-serif;
  }
`;

export const ProductsLsit = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SumCart = styled.div`
  width: 280px;
  margin: 0 auto;
  border-bottom: 1px solid #30a5e7;
  & > .text {
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    color: #fff;
  }
  & > .sum {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #b240e4;
  }
`;

export const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01px;
  color: #ffffff;
`;
