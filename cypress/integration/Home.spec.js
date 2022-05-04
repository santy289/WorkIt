/// <reference types="Cypress" />
describe('Landing page test', ()=>{
    it('succesfuly render the landing pag',()=>{
        cy.visit('/');
        cy.contains('Home');
        cy.title().should('eq',"Workit");
        cy.get('h1').should('be.visible');
        cy.get('Header').should('be.visible');
        });
});