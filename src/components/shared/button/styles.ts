import styled from "styled-components";
import { IButtonProps } from "../../../types";
export const ButtonContainer = styled.button<IButtonProps>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  background: ${({ background }) =>
    background
      ? background
      : "linear-gradient(360deg, #0059d6 0%, #30a5e7 100%)"};
  background: ${({ disabled }) => disabled && "#9e9e9e"};
  border-radius: 8px;
  outline: none;
  border: ${({ disabled }) => (disabled ? "3px solid gray" : "none")};
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background: ${({ disabled }) =>
      !disabled &&
      `linear-gradient(
      360deg,
      #9c1abc 0%,
      #540f90 0.01%,
      #b240e4 100%
    )`};
  }
`;
