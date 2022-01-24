import React from 'react';
import PropTypes from 'prop-types';

import { BtnLoadMore } from './Button.styled';

const Button = ({ buttonP }) => (
  <BtnLoadMore type="submit" onClick={buttonP}>
    Load more
  </BtnLoadMore>
);

export default Button;

Button.propTypes = {
  buttonP: PropTypes.func.isRequired,
};
