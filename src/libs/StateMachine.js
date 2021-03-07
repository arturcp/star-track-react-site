/* eslint-disable no-param-reassign */

// A state machine is a behavior model. It consists of a
// finite number of states and is therefore also called
// finite-state machine (FSM).
//
// This class cannot be used directly as it is not exported.
// The reason is that it expects a very specific format
// in the data it is built upon, so, instead of instantiating
// the class developers can use the `createStateMachine` function
// below.
//
// An example of the resulting data:
//
//   data = {
//     mainComponent: [object],
//     initial: 'green',
//     states: {
//       green: { next: 'yellow', component: fn },
//       yellow: { next: 'red', component: fn },
//       red: { next: '', component: fn },
//   }
//
// But it is not necessary to build it by hand. The
// `createStateMachine` expects these parameters:
//
// * Component: the component that will make use of the
//   state machine. Usually, it will receive `this`.
//
// * states: this is an array of strings with the
//   states in the correct order. Example:
//   ['green', 'yellow', 'red'].
//
// By creating a state machine into a component, it will
// automatically gain two methods:
//
// * nextStage: moves to the next stage of the state machine and
//   returns the hash that contains the name of the next stage and
//   the function to build the component.
//
// * componentForCurrentStage: this function builds the
//   component to be rendered. It will call a method
//   named on<current stage name>, and the current stage
//   name must be in camel case, starting with a capital
//   letter. These functions must be defined in the original
//   component.
//
//   Example: if the current stage is `introduction`, it will
//   call a function named onIntroduction. if this function does
//   not exist, it will return null;
//
// Also, a variable will be added to the component's state
// called `currentStage`.
class StateMachine {
  constructor(data) {
    this.data = data;
    this.currentState = data.initial;
  }

  current = () => ({
    value: this.currentState,
    ...this.data.states[this.currentState],
  });

  next = () => {
    this.currentState = this.current().next;
    return this.current();
  };

  component = () => {
    const current = this.current();
    if (
      current
      && current.component
      && typeof current.component === 'function'
    ) {
      return current.component(this.data.mainComponent);
    }

    return null;
  };
}

const createStateMachine = (Component, states) => {
  const data = {
    mainComponent: Component,
    initial: states[0],
    states: {},
  };

  const capitalize = (s) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  for (let i = 0; i < states.length - 1; i += 1) {
    const currentState = states[i];
    const nextState = states[i + 1];

    data.states[currentState] = {
      next: nextState,
      component: Component[`on${capitalize(currentState)}`],
    };
  }

  const lastState = states[states.length - 1];
  data.states[lastState] = {
    next: '',
    component: Component[`on${capitalize(lastState)}`],
  };

  const stateMachine = new StateMachine(data);

  Component.nextStage = () => {
    const newStage = stateMachine.next().value;
    Component.setState({ currentStage: newStage });
  };

  let timeoutIsRunning = false;
  Component.nextStageAfterPause = (delay) => {
    if (!timeoutIsRunning) {
      timeoutIsRunning = true;
      setTimeout(() => {
        Component.nextStage();
        timeoutIsRunning = false;
      }, delay);
    }
  };

  Component.componentForCurrentStage = () => stateMachine.component();
  Component.stateMachine = stateMachine;

  return states[0];
};

export default createStateMachine;
