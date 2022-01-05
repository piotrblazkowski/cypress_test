/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://konto.onet.pl/register.html?')
  })

  // https://on.cypress.io/interacting-with-elements
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('[class="cmp-intro_title"]')
    cy.get('[class="cmp-closebutton_closeButton cmp-closebutton_hasBorder "]').click() //click on 'Close' popup window
    
    cy.get('input[type="email"').as('email_field') // find email element, make allias
    cy.get('[class="styles__Message-sc-1gwbm5g-4 eyKlch"]').as('error_message') //find message element, make allias
    
    cy.get('@email_field').click() // click on email alias element
      .clear() //clear element
      .type('plainaddress').should('have.value', 'plainaddress') // type into element, check if value is entered
      .wait(1000) // wait 1sec
    cy.get('@error_message') //find message alias element
      .should('have.text', 'Wpisz poprawny adres email') // check if message alias has text about wrong email address
    
    cy.get('@email_field')
      .clear()
      .type('email.domain.com').should('have.value', 'email.domain.com')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')

    cy.get('@email_field')
      .clear()
      .type('@domain.com').should('have.value', '@domain.com')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')

    cy.get('@email_field')
      .clear()
      .type('#@%^%#$@#$@#.com').should('have.value', '#@%^%#$@#$@#.com')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')

    cy.get('@email_field')
      .clear()
      .type('joe smith <email@domain.com>').should('have.value', 'joesmith<email@domain.com>')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')

    cy.get('@email_field')
      .clear()
      .type('email@domain.com (joe smith)').should('have.value', 'email@domain.com(joesmith)')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')

    cy.get('@email_field')
      .clear()
      .type('email@domain@domain.com').should('have.value', 'email@domain@domain.com')
      .wait(1000)
    cy.get('@error_message')
      .should('have.text', 'Wpisz poprawny adres email')
    
    //cy.get('[class="styles__SeparationLineStyled-jliqbq-0 jZPpmj"]')
    //cy.get('[class="styles__Label-jliqbq-1 jUNpNF"]')
        cy.get('[class="styles__SeparationLineStyled-jliqbq-0 jZPpmj"]').contains('Masz już konto?')
        cy.get('[class="styles__Label-jliqbq-1 jUNpNF"]').should('have.value', 'Masz już konto?')
        cy.get('[class="styles__SeparationLineStyled-jliqbq-0 jZPpmj"]').contains('MASZ JUŻ KONTO?')
  
/*  const pass = 'MojKomputerek01!'
    cy.get('input[type="email"')
      .clear()
      .type('@domain.com').should('have.value', '@domain.com')
      .wait(1000)
    cy.get('[class="styles__Message-sc-1gwbm5g-4 eyKlch"]')
      .should('have.text', 'Wpisz poprawny adres email')    
    
    cy.get('input[id="password"]')
      .clear()
      .type(pass)
    
      cy.get('button[class="btn"]')
      .click()
      //.should('have.value', 'test@test.test.pl2')
*/
  })
})
