import { RarefieldPage } from './app.po';

describe('rarefield App', function() {
  let page: RarefieldPage;

  beforeEach(() => {
    page = new RarefieldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
