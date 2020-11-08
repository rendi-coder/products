import styled from "styled-components";

export const Header = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid #30a5e7;
  & > .menu-link {
    padding-top: 30px;
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 28px;
    a {
      text-decoration: none;
    }
    .link {
      color: #fff;
    }
  }
`;
