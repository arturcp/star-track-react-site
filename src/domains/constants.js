const Constants = {
  DIRECTIONS: {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
  },

  MOVEMENT: {
    RIGHT_FOOT_AHEAD: 0,
    STOPPED: 1,
    LEFT_FOOT_AHEAD: 2,
  },

  PC: {
    PLAYER_DATA: { width: 64, height: 96 },
  },

  DRKEN: {
    PLAYER_DATA: { width: 64, height: 64 },
  },
};

export default Constants;

export const GAME_STATUS = {
  INITIAL: 'initial',
  HISTORY: 'on history',
  LOADING: 'loading',
  TUTORIAL: 'on tutorial',
  STARTED: 'started',
  FINISHED: 'finished',
};
