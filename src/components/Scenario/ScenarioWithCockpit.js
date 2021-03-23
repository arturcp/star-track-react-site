import React from 'react';
import PropTypes from 'prop-types';
import Scenario from './Scenario';
import Cockpit from './Cockpit';

import './styles.scss';

const scenarioWithCockpit = (props) => {
  const { scenario } = props;
  const { show, closingAnimation, buildCockpitContent } = props.cockpit;
  const animate = closingAnimation === true;
  const cockpitClasses = animate ? 'scale-out-ver-top' : '';

  return (
    <div className={`scenario-with-cockpit ${scenario}`}>
      <Scenario>
        {props.children}
      </Scenario>

      {(show || animate) && (
        <Cockpit classes={cockpitClasses}>
          {buildCockpitContent()}
        </Cockpit>
      )}
    </div>
  );
};

scenarioWithCockpit.propTypes = {
  // Name of the scenario. This property is strongly linked
  // to the image that will be displayed.
  //
  // Available scenarios:
  //
  // * doctor-lab
  //
  // Check this container's css to see the available classes.
  scenario: PropTypes.string,

  // Information about the cockpit. Cockpit is an area just
  // below the scenario with extra hints and, for mobile
  // devices, a joystick to allow users to move the
  // characters.
  //
  // The cockpit has three possible states:
  //
  // * Not displayed (show: false, closingAnimation: false)
  // * Displayed (show: true)
  // * Not displayed, but with a closing animation
  //   (show: false, closingAnimation: true).
  //
  // The last state is necessary when a scene before has the
  // cockpit and in the current scene it should close. This
  // grants a transition with a closing effect.
  //
  // The `content` attribute is what will be added inside the cockpit.
  // It can be a simple text or a complex component, it is up to you.
  cockpit: PropTypes.shape({
    show: PropTypes.bool,
    closingAnimation: PropTypes.bool,
    content: PropTypes.object,
  }),
};

export default scenarioWithCockpit;
