import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  color?: string;
};

const ButtonRectang: React.FC<Props> = ({ children, color }) => {
  console.log(color);
  return <Button color={color}>{children}</Button>;
};

export default ButtonRectang;

const Button = styled.button`
  width: 10rem;
  background-color: ${props => (props.color ? '  blue' : props.color)};
  color: ${props => (props.color ? props.color : 'blue')};
`;
