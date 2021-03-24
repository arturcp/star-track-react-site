import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nipplejs from 'nipplejs';
import PubSub from 'pubsub-js';

export default class Joystick extends Component {
  constructor() {
    super();
    this.controlsRef = React.createRef();
  }

  componentDidMount() {
    const { options } = this.props;
    this.controls = nipplejs.create({ ...options, zone: this.controlsRef.current });
    this.managerListener(this.controls);
  }

  managerListener = (manager) => {
    manager.on('move dir', (e, stick) => {
      PubSub.publish('Joystick::Moved', { e, stick });
    });
  };

  render() {
    const { containerStyle } = this.props;

    return (
      <div ref={this.controlsRef} style={containerStyle} />
    );
  }
}

Joystick.defaultProps = {
  options: {
    mode: 'static',
    catchDistance: 150,
    color: 'black',
    position: { top: '50px', left: '50px' },
  },
  containerStyle: {
    position: 'absolute',
    width: '100px',
    height: '80px',
    right: '25px',
  },
};

Joystick.propTypes = {
  options: PropTypes.shape({
    mode: PropTypes.string,
    catchDistance: PropTypes.number,
    color: PropTypes.string,
  }),
  containerStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    background: PropTypes.string,
  }),
};
