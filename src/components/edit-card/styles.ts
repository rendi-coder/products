import styled from "styled-components";

export const EditCardContainner = styled.div`
  width: 780px;
  height: 700px;
  border: 1px solid #414d55;
  border-radius: 16px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  & > .short-title {
    width: 70%;
    height: 80px;
    margin-bottom: 70px;
  }
  & > .price {
    width: 70%;
    height: 38px;
    margin-bottom: 100px;
    & > .validation-error {
      padding-top: 5px;
      font-size: 12px;
      font-family: "Roboto", sans-serif;
      color: red;
    }
  }
  & > .description {
    width: 70%;
    height: 140px;
    margin-bottom: 100px;
  }
  & > .save-card {
    width: 250px;
    height: 80px;
    @media screen and (max-width: 600px) {
      width: 180px;
      height: 60px;
    }
    .btn-text {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
  .label {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .price {
    color: #30a5e7;
  }
`;
