import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/helper";

interface buttonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: string;
}

const StyledButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.red};
  border: none;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.semiDarkBlue};
  }
`;

const Button: React.FC<buttonProps> = ({ children, onClick }) => {
  return (
    <StyledButton className='button' onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
