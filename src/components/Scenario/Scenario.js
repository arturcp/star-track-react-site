import React from 'react';
import PropTypes from 'prop-types';

const scenario = (props) => {
  const { classes } = props;
  return (
    <section className={`scenario ${classes}`}>
      {props.children}
    </section>
  );
};

scenario.propTypes = {
  // Comma-separated classes to be used in the scenario.
  // Apart from these classes, there is a default class
  // that will be added as well: `scenario`.
  classes: PropTypes.string,
};

export default scenario;
