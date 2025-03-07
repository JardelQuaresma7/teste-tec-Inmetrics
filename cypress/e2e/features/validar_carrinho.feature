Feature: Validação do Carrinho

  Scenario: Validar produto no carrinho na tela de pagamento
  Given que estou na página do produto com ID "10" 
  When eu clicar no botão "ADD TO CART"
  And clico no icone de carrinho
  And eu vou para a tela do carrinho
  Then o produto adicionado deve ser exibidos corretamente