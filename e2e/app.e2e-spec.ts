import { SafeRoomPage } from './app.po';

describe('safe-room App', function() {
  let page: SafeRoomPage;

  beforeEach(() => {
    page = new SafeRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
