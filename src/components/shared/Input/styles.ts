import styled from "styled-components";

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled("input")`
  width: 80%;
  height: 100%;
  outline: none;
  background: #1a1e24;
  padding: 5px 11px;
  border: 1px solid #414d55;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #30a5e7;
  ::-webkit-input-placeholder {
    color: #90a1ac;
    opacity: 1;
  }
`;
