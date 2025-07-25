///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    cy.visit('../../seletores.html')//estou direcionando para um arquivo da minha maquina 
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Item 3')
      .should('have.attr', 'class', 'filho-3')//valida se tem algum atributo (depois da primeira virgula vem o atributo e a ultima é a informação)
  });

  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist') //valida se uma classe existe
  })

  it('Seleciona o elemento com o id Filho', () => {
    cy.get('[id="id-filho"]').should('exist')
    cy.get('#id-filho').should('exist')//as duas formas fazem a mesma coisa (eu prefiro a primeira)
  })

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai').find('.filho-2').should('contain', 'Item') //para selecionar dentro de um id
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao').eq(1).should('contain', 'Irmão 2') //o eq vai selecionar qual vc deseja 
    cy.get('.irmao + .irmao').should('contain', 'Irmão 2') //prefiro da primeira forma (se tiver varios vai ter que ficar somando até chegar no que você deseja)
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('#irmao-1').next().should('contain', 'Irmão 2')//para pegar o proximo valor 
  });

  it('Seleciona o elemento irmão anterior', () => {
    cy.get('#irmao-2').prev().should('contain', 'Irmão 1') //para pegar o elemento anterior 
  });

  it('Seleciona o irmão da div anterior', () => {
    cy.get('[name="nome-do-atributo"]').prev().should('contain', 'Item 1') //para pegar o elemento anterior (mas agora com div)

  });

  it('Seleciona o terceiro elemento <li> encontrado', () => {
    cy.get('li').eq(2).should('have.text', 'Item 3')//para pegar um item pela posição dele
    //have.text valida o texto
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('exist')
    //use [] para trabalhar com o atributo inteiro
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    //vamos começar selecionando o elemento filho para depois chegar no pai
    cy.get('.filho-4').parent('[data-test="div-pai"]').should('have.attr', 'class', 'pai')//para achar o pai
  });

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('[name="opcao"]').select('Muito') //o select é usado para selecionar algum valor dentro de uma lista
    cy.get('[name="opcao"]').select('muito') //para usar o select usando o value (funciona da mesma forma)
    cy.get('[id="id-enviar"]').click()//para clicar em um botão 
    cy.get('[id="mensagemFeedback"]').should('have.text', 'Obrigado por compartilhar conosco!')//estou validando se exite um texto
  });
})