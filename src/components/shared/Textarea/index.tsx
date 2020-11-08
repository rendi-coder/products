import React from "react";
import * as Styled from "./styles";

const Textarea: React.FC<{
  placeholder: string;
  value: string;
  errors: any;
  name: string;
  onChange: any;
}> = ({ placeholder, onChange, value, errors, name, ...props }) => {
  return (
    <Styled.TextWrapper>
      <Styled.Text
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Styled.Error>{errors[name]}</Styled.Error>
    </Styled.TextWrapper>
  );
};
export default Textarea;
