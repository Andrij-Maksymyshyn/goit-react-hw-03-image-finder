import React from 'react';
import { BtnLoadMore } from './Button.styled';

const Button = ({ buttonP }) => (
  <BtnLoadMore type="submit" onClick={buttonP}>
    Load more
  </BtnLoadMore>
);

export default Button;
