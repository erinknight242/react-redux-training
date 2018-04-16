import * as CONST from '../constants';
import initialState from '../initialState';

const cardListReducer = (state = initialState.cardList, { type, data }) => {
  switch (type) {
    case CONST.DISPLAY_CARD_LIST:
      return data;
    default:
      return state;
  }
};

export default cardListReducer;
