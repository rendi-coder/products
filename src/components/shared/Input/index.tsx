import React from "react";
import * as Styled from "./styles";

const Input: React.FC<{
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, value, onChange }) => {
  return (
    <Styled.InputWrapper>
      <Styled.Input
        autoComplete={"off"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Styled.InputWrapper>
  );
};

export default Input;
