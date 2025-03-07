Feature: Busca de Produto

  Scenario: Buscar um produto no site
    Given que estou na página inicial
    When eu busco por "Laptop"
    Then os resultados da busca devem conter "Laptop"