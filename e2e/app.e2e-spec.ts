import { InfinityPage } from './app.po';

describe('infinity App', () => {
  let page: InfinityPage;

  beforeEach(() => {
    page = new InfinityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
