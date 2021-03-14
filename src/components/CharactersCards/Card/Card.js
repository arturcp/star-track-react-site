import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const card = (props) => (
  <div className="wrapper">
    <div className={`clash-card ${props.cardType}`}>
      <div className="clash-card__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className={`clash-card__level clash-card__level--${props.cardType}`}>
        {props.subtitle}
      </div>
      <div className="clash-card__unit-name">{props.title}</div>
      <div className="clash-card__unit-description">{props.description}</div>
    </div>
  </div>
);

card.propTypes = {
  // The card's main title, displayed with a larger font-size.
  title: PropTypes.string.isRequired,

  // Subtitle of the card, displayed with a smaller font and
  // above the title.
  subtitle: PropTypes.string,

  // Type of the card. It is used to offer a set of cards
  // that can be used out-of-the-box. For now,
  // the only available options are:
  //
  // * default: the card will show a large image at the top,
  //   followed by the subtitle in orange, the title and the
  //   description.
  cardType: PropTypes.string.isRequired,

  // Descriptive text that will be displayed in the card.
  description: PropTypes.string,

  // Main image displayed in the card.
  image: PropTypes.string.isRequired,
};

export default card;
