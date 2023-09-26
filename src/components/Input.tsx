import { PropsWithChildren } from "react";
import styled from "styled-components";

const Input: React.FC<PropsWithChildren> = () => {
  return <StyledInput />;
};

const StyledInput = styled.input`
  font-size: 18px;
  height: 50px;
`;

export default Input;
