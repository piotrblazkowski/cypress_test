/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://konto.onet.pl/register.html?')
  })

  // https://on.cypress.io/interacting-with-elements
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
        //cy.get('[class="cmp-intro_title"]')
       // cy.get('[class="cmp-closebutton_closeButton cmp-closebutton_hasBorder "]').click() //click on 'Close' popup window

        cy.get('[class="styles__SeparationLineStyled-jliqbq-0 jZPpmj"]').contains('Masz już konto?')

        cy.get('[class="styles__SeparationLineStyled-jliqbq-0 jZPpmj"]').should(($lis) => {
          expect($lis).to.have.length(1)
          expect($lis).to.contain('Masz już konto?')
          expect($lis).to.have.text('Masz już konto?')
        })
        cy.get('[class="styles__Label-jliqbq-1 jUNpNF"]')
        .should('have.css', 'line-height', '16px') // zdefiniowana wysokość czcionki tekstu
        .should('have.css', 'font-size', '14px') // zdefiniowana wysokość linii tekstu


        cy.get('[class="styles__Links-r7hfzu-3 gHFdQT"] > li').should(($lista) => { // find element 'ul' 
          expect($lista).to.have.length(3) // should have 3 sub-elements
          expect($lista.eq(0)).to.contain('Polityka prywatności') // first sub-element should have text
        })

        cy.get('[class="styles__Label-jliqbq-1 jUNpNF"]')
        .invoke('css', 'text-transform')
        .should('equal', 'uppercase')

        cy.get('[class="styles__Label-jliqbq-1 jUNpNF"]')
        //.should('have.attr', 'text-transform', 'uppercase')
        .should('have.css', 'text-transform', 'uppercase')

        cy.get('#__next').click('bottomRight')
  })
})
