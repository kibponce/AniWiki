import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  border-radius: 5px;
  height: 50px;
  border: 1px solid #333333;
  padding: 4px 15px;
`;

const StyledInput = styled.input`
  font-size: 1.4rem;
  display: block;
  border-radius: 5px;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export default Input;
