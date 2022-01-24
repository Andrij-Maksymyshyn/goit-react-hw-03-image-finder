import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import { BoxUl } from './ImageGallery.styled';

const ImageGallery = ({ prop }) => (
  <BoxUl>
    {prop.map(({ webformatURL, tags }, index) => (
      <ImageGalleryItem key={index} webformatURL={webformatURL} tags={tags} />
    ))}
  </BoxUl>
);

export default ImageGallery;

ImageGallery.propTypes = {
  prop: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
