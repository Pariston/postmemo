import { PostmemoPage } from './app.po';

describe('postmemo App', function() {
  let page: PostmemoPage;

  beforeEach(() => {
    page = new PostmemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
