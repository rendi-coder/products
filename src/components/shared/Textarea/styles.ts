import styled from "styled-components";

export const TextWrapper = styled("div")`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Text = styled("textarea")`
  height: 100%;
  background: #1a1e24;
  outline: none;
  resize: none;
  padding: 10px 12px;
  border: 1px solid #414d55;
  border-radius: 12px;
  min-height: 50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #30a5e7;
  ::-webkit-input-placeholder {
    color: #90a1ac;
    opacity: 1;
  }
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #414d55;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #30a5e7;
    border-radius: 3px;
  }
`;

export const Error = styled.div`
  padding-top: 5px;
  height: 25px;
  font-size: 12px;
  color: red;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
