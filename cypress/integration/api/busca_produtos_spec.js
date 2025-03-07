describe('Teste de API - Busca de Produtos', () => {
  const termoBusca = 'laptop';

  it('Deve retornar status 200 ao buscar produtos com o termo específico', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
      qs: { name: termoBusca }
    }).then(res => {
      expect(res.status).to.eq(200);
    });
  });
});