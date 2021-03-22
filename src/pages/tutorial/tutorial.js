import React, { Component } from 'react';
// import Header from '../../components/Header/Header';
// import Introduction from './introduction';
// import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';
// import Dialogs from '../../components/Dialogs/Dialogs';
// import InfoBar from '../../components/InfoBar/InfoBar';
// import withGame from '../../hoc/with-game';
// import Api from '../../services/api';
// import createStateMachine from '../../libs/StateMachine';

// import rocket from '../../images/rocket-launch.gif';
import './styles.scss';

// This page receives the current character in the `location`
// attribute through the state property of the <Link> component
// that redirected the user to this page.
class Tutorial extends Component {
  state = { value: '' }

  render() {
    const a = 10;
    const { value } = this.state;
    return (
      <h1>
        Tutorial
        {a + value}
      </h1>
    );
  }
}

export default Tutorial;
