import uuid from 'react-uuid';
import * as actionTypes from './actions';
import * as constants from '../domains/constants';

const initialState = {
  id: uuid(),
  levels: [],
  character: null,
  npcs: [],
  currentLevelId: 1,
  currentStageId: 1,
  currentDialogId: 1,
  points: 0,
  status: constants.GAME_STATUS.INITIAL,
};

const reducer = (state = initialState, action) => {

};

export default reducer;
