import * as CONST from '../constants';
import initialState from '../initialState';

const welcomeCardReducer = (state = initialState.welcomeCard, { type, data }) => {
  switch (type) {
    case CONST.DISPLAY_WELCOME_CARD:
      return Object.assign({}, state, data);
    default:
      return state;
  }
};

export default welcomeCardReducer;
