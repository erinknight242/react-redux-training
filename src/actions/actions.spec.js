import * as actions from './actions';

describe('Redux Actions', () => {
  it('should dispatch a displayWelcomeCard action', () => {
    const getState = jest.fn(); // mock function
    const dispatch = jest.fn();
    actions.getWelcomeCardData()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_WELCOME_CARD',
      data: {
        imgUrl: 'http://icdn8.digitaltrends.com/image/funny-grumpy-cat-images-hd-wallpaper-1080x611-640x0.jpg',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
        title: 'Welcome to the Sample Dashboard',
      },
    });
  });

  it('should dispatch a displayCardList action', () => {
    const getState = jest.fn();
    const dispatch = jest.fn();
    actions.getCardListData()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_CARD_LIST',
      data: [
        { id: 1, title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.', imgUrl: 'https://picsum.photos/500/300' },
        { id: 2, title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.', imgUrl: 'https://picsum.photos/500/300/?random' },
      ],
    });
  });
});
