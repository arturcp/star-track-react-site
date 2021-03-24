import React from 'react';
import PropTypes from 'prop-types';
import ScenarioWithCockpit from './ScenarioWithCockpit';
import Joystick from '../Joystick/Joystick';

import './styles.scss';

const gameScenario = (props) => {
  const { scenario, cockpit, joystickSettings } = props;
  const { show: showCockpit, closingAnimation: closingCockpitAnimation } = cockpit;

  const joystickControl = () => (
    <Joystick {...joystickSettings} />
  );

  return (
    <ScenarioWithCockpit
      scenario={scenario}
      cockpit={{
        show: showCockpit,
        closingAnimation: closingCockpitAnimation,
        buildCockpitContent: joystickControl,
      }}
    >
      {props.children}
    </ScenarioWithCockpit>
  );
};

gameScenario.propTypes = {
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
  cockpit: PropTypes.shape({
    show: PropTypes.bool,
    closingAnimation: PropTypes.bool,
  }),
};

export default gameScenario;
