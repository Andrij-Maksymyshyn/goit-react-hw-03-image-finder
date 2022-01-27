import React from 'react';
import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => (
  <Li
    onClick={() => {
      onClick(largeImageURL, tags);
    }}
  >
    <Img src={webformatURL} alt={tags} />
  </Li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
