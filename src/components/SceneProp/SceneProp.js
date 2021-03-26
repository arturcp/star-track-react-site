/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const sceneProp = (props) => {
  const {
    image,
    name,
    imageStyles,
    onClick,
  } = props;
  const defaultStyles = { top: 0, left: 0 };
  const propStyles = { ...defaultStyles, ...imageStyles };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      className="scene-object"
      style={propStyles}
      src={image}
      alt={name}
      onClick={onClick}
    />
  );
};

sceneProp.propTypes = {
  // Image that will be first displayed.
  //
  // Make sure you pass an image already imported:
  // `import image from '<path-to-the-image>';`
  image: PropTypes.element,

  // Name of the scene prop. It will be used
  // in the `alt` attribute.
  name: PropTypes.string,

  // Css style to change the object appearance.
  // It accepts all css properties and will be used
  // in the `style` of the image.
  imageStyle: PropTypes.object,
};

export default sceneProp;
