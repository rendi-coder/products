import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  & > .input {
    display: flex;
    justify-content: center;
    background: #1a1e24;
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
    & > #search-input {
      ::-webkit-input-placeholder {
        color: #90a1ac;
        opacity: 1;
      }
      font-family: 'Poppins', sans-serif;
      outline: none;
      border: 1px solid #414d55;
      padding-left: 23px;
      padding-top: 5px;
      width: 100%;
      height: 60px;
      border-radius: 8px;
      color: #fff;
      background: #1a1e24;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
