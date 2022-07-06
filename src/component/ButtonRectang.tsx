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
  background-color: ${props => (props.color ? props.theme.colors.blue_1 : '#fff')};
  color: ${props => (props.color ? props.color : props.theme.colors.blue_1)};
  border: ${props => `1px solid ${props.theme.colors.blue_1}`};
  border-radius: 3px;
  padding: 0.6rem;
`;
