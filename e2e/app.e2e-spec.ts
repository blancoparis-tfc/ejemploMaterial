import { EjemploMaterialPage } from './app.po';

describe('ejemplo-material App', function() {
  let page: EjemploMaterialPage;

  beforeEach(() => {
    page = new EjemploMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
