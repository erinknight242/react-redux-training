import welcomeReducer from './welcomeCardReducer';
import cardListReducer from './cardListReducer';

describe('Reducers', () => {
  describe('Welcome Reducer', () => {
    it('should return the initial Welcome Card state', () => {
      expect(welcomeReducer(undefined, {})).toEqual({
        msg: '',
        title: '',
        imgUrl: '',
      });
    });

    it('should handle DISPLAY_WELCOME_CARD', () => {
      const testData = {
        title: 'Test',
        msg: 'Other Test',
        imgUrl: 'http://www.google.com',
      };
      expect(
        welcomeReducer(undefined, {
          type: 'DISPLAY_WELCOME_CARD',
          data: testData,
        }),
      ).toEqual(testData);
    });
  });

  describe('Card List Reducer', () => {
    it('should return the initial Card List state', () => {
      expect(cardListReducer(undefined, {})).toEqual([]);
    });

    it('should handle DISPLAY_CARD_LIST', () => {
      const testData = [
        { id: 1, title: 'One', msg: 'Red', imgUrl: 'http://www.google.com' },
        { id: 2, title: 'Two', msg: 'Blue', imgUrl: 'http://www.google.com' },
      ];
      expect(
        cardListReducer(undefined, {
          type: 'DISPLAY_CARD_LIST',
          data: testData,
        }),
      ).toEqual(testData);
    });
  });
});
