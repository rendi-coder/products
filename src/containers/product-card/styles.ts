import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 0 20px 40px;
  width: 300px;
  height: 280px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin: 0 0px 40px;
  }
  & > .action-list {
    padding-bottom: 40px;
    display: flex;
    justify-content: space-around;
  }
  & > .action-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > .quantity {
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      color: #30a5e7;
      line-height: 30px;
      margin-bottom: 5px;
    }
    & > .action {
      display: flex;
      justify-content: space-around;
      padding-bottom: 20px;
    }
  }
`;

export const CardContainer = styled.div`
  & > .title {
    padding: 24px 15px 15px;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.01px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  & > .price {
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 40px;
    color: #30a5e7;
  }
  & > .description {
    width: 250px;
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
