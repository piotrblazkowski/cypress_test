/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/html/html5_draganddrop.asp')
  })

  it('How to Drag and Drop elements', () => {
        cy.get('[class="sn-b-def sn-blue"]').click()
        
        const dataTransfer = new DataTransfer();
        cy.get('[id="div1"]').trigger('dragstart', {
            dataTransfer
        });

        cy.get('[id="div2"]').trigger('drop', {
          dataTransfer 
        })
 })
})
