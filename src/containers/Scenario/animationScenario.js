import React from 'react';
import PropTypes from 'prop-types';
import Joystick from '../../components/Joystick/Joystick';

import './styles.scss';

const animationScenario = (props) => {
  const { scenario } = props;
  const { show, closingAnimation } = props.cockpit;
  const classes = `animation-scenario ${scenario}`;
  const animate = closingAnimation === true;

  const managerListener = (manager) => {
    manager.on('move', (e, stick) => {
      console.log('I moved!', e, stick);
    });

    manager.on('end', () => {
      console.log('I ended!');
    });
  };

  return (
    <section className={classes}>
      {props.children}
      {(show || animate) && (
        <div className={`cockpit ${animate ? 'scale-out-ver-top' : ''}`}>
          <Joystick managerListener={managerListener} />
        </div>
      )}
    </section>
  );
};

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

export default animationScenario;
