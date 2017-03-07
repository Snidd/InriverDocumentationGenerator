import { InriverDocumentationGeneratorPage } from './app.po';

describe('inriver-documentation-generator App', () => {
  let page: InriverDocumentationGeneratorPage;

  beforeEach(() => {
    page = new InriverDocumentationGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
