import React from 'react';
import PropTypes from 'prop-types';

const cockpit = (props) => {
  const { classes } = props;
  return (
    <div className={`cockpit ${classes}`}>
      {props.children}
    </div>
  );
};

cockpit.propTypes = {
  // Comma-separated classes to be used in the cockpit.
  // Apart from these classes, there is a default class
  // that will be added as well: `cockpit`.
  classes: PropTypes.string,
};

export default cockpit;
