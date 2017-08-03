import { HWPage } from './app.po';

describe('hw App', () => {
  let page: HWPage;

  beforeEach(() => {
    page = new HWPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
