import { AngularProjectWithCliPage } from './app.po';

describe('angular-project-with-cli App', function() {
  let page: AngularProjectWithCliPage;

  beforeEach(() => {
    page = new AngularProjectWithCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
