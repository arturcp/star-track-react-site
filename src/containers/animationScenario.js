import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const animationScenario = (props) => (
  <section className={`animation-scenario ${props.scenario}`}>
    {props.children}
  </section>
);

animationScenario.propTypes = {
  // Name of the scenario. This property is strongly linked
  // to the image that will be displayed.
  //
  // Available scenarios:
  //
  // * doctor-lab
  //
  // Check this container's css to see the available classes.
  scenario: PropTypes.string,
};

export default animationScenario;
