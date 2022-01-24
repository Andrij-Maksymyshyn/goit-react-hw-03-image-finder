import React from 'react';
import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <Li>
    <Img src={webformatURL} alt={tags} loading="lazy" />
  </Li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
