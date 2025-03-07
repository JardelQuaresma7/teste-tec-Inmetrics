Feature: Adicionar Produto ao Carrinho

Scenario: Adicionar um produto ao carrinho
  Given que estou navegando na página inicial
  When eu clico na categoria "Laptops"
  And eu seleciono o produto com ID "10" 
  And eu clico no botão "ADD TO CART"
  Then o produto é adicionado ao carrinho