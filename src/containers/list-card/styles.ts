import styled from "styled-components";

export const MainViewWrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  height: 100%;
  @media screen and (max-width: 1180px) {
    width: 900px;
  }
  @media screen and (max-width: 980px) {
    width: 700px;
  }
  @media screen and (max-width: 760px) {
    width: 95%;
  }
  /* @media screen and (max-width: 500px) {
    width: 100%;
  } */
  .prompt {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
`;

export const Menu = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .filter-search {
    width: 780px;
    @media screen and (max-width: 1180px) {
      width: 500px;
    }
    @media screen and (max-width: 980px) {
      width: 400px;
    }
    @media screen and (max-width: 600px) {
      width: 300px;
    }
    @media screen and (max-width: 500px) {
      width: 220px;
    }
  }
  & > .create-card {
    width: 120px;
    height: 60px;
    text-decoration: none;
    @media screen and (max-width: 500px) {
      width: 70px;
    }
    .btn-text {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: bold;
      color: #fff;
      font-size: 18px;
    }
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 25px;
`;
