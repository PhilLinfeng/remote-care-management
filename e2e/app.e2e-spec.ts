import { RemoteCareManagementPage } from './app.po';

describe('remote-care-management App', () => {
  let page: RemoteCareManagementPage;

  beforeEach(() => {
    page = new RemoteCareManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
