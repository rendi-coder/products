import React from "react";
import { ButtonContainer } from "./styles";

const Button: React.FC<{
  width: string;
  height: string;
  children: React.ReactChild;
  className?: string;
  onClick?: any;
  disabled?: boolean;
}> = ({ width, height, children, className = "btn", onClick, disabled }) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
