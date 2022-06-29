import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
};
const ButtonCircle: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default ButtonCircle;

const StyledButton = styled.button`
  background-color: pink;
  border-radius: 10rem;
  width: 2rem;
  height: 2rem;
`;
