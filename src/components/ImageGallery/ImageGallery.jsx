import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import { BoxUl } from './ImageGallery.styled';

const ImageGallery = ({ propGallery, onClick }) => (
  <BoxUl>
    {propGallery.map(({ webformatURL, tags, largeImageURL }, index) => (
      <ImageGalleryItem
        key={index}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        onClick={onClick}
      />
    ))}
  </BoxUl>
);

export default ImageGallery;

ImageGallery.propTypes = {
  propGallery: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};
