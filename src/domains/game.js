import uuid from 'react-uuid';

export default class Game {
  STATUS = {
    initial: 'initial',
    history: 'on history',
    loading: 'loading',
    tutorial: 'on tutorial',
    started: 'started',
    finished: 'finished',
  };

  constructor(gameContext, onSave) {
    this.onSave = onSave;

    const defaultData = {
      id: uuid(),
      levels: [],
      character: null,
      npcs: [],
      currentLevelId: 1,
      currentStageId: 1,
      currentDialogId: 1,
      points: 0,
      status: this.STATUS.initial,
    };

    const data = Object.assign(defaultData, gameContext);

    // Each key of the hash becomes an attribute of the
    // Game class.
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(data)) {
      this[key] = value;
    }
  }

  save = () => {
    this.onSave(this);
  };

  start = (character, levels, npcs) => {
    this.character = character;
    this.levels = levels;
    this.npcs = npcs;
    this.status = this.STATUS.history;
    this.save();
  };

  changeStatus = (newStatus) => {
    this.status = newStatus;
  }

  userLocation = () => {
    let location = '';

    switch (this.status) {
    case this.STATUS.history:
      location = `${this.character.name}'s history`;
      break;
    case this.STATUS.tutorial:
      location = 'Tutorial';
      break;
    case this.STATUS.loading:
      location = 'Loading...';
      break;
    default:
      location = '';
    }

    return location;
  }

  currentLevel = () => {
    debugger;
  }
}
