import { FeralCatsPage } from './app.po';

describe('feral-cats App', () => {
  let page: FeralCatsPage;

  beforeEach(() => {
    page = new FeralCatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
