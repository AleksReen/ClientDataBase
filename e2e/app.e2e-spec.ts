import { ClientDataBasePage } from './app.po';

describe('client-data-base App', () => {
  let page: ClientDataBasePage;

  beforeEach(() => {
    page = new ClientDataBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
