describe('Create an user and access with it', ()=>{
    it('succesfuly sucessfully register',()=>{
        cy.visit('/');

        /* ==== Generated with Cypress Studio ==== */
        cy.get('.Header_nav > [href="/sign-up"]').click();
        cy.get(':nth-child(5) > #name').clear();
        cy.get(':nth-child(5) > #name').type('Usuario');
        cy.get(':nth-child(7) > #name').clear();
        cy.get(':nth-child(7) > #name').type('Demo');
        cy.get(':nth-child(9) > #name').clear();
        cy.get(':nth-child(9) > #name').type('userdemo1');
        cy.get(':nth-child(11) > #name').clear();
        cy.get(':nth-child(11) > #name').type('userdemo1@mail.com');
        cy.get(':nth-child(14) > #name').clear();
        cy.get(':nth-child(14) > #name').type('Bogota');
        cy.get(':nth-child(16) > #name').clear();
        cy.get(':nth-child(16) > #name').type('Calle 12 #34-45');
        cy.get(':nth-child(18) > #name').clear();
        cy.get(':nth-child(18) > #name').type('123');
        cy.get(':nth-child(20) > #name').clear();
        cy.get(':nth-child(20) > #name').type('123');
        cy.get('.button').click();
        /* ==== End Cypress Studio ==== */
    });
});
describe('Landing page test', ()=>{
    it('succesfuly sucessfully login',()=>{
        cy.visit('/');

        /* ==== Generated with Cypress Studio ==== */
        cy.get('.Header_nav > :nth-child(4)').click();
        cy.get('#username').click();
        cy.get('#username').clear();
        cy.get('#username').type('userdemo1');
        cy.get('#password').clear();
        cy.get('#password').type('123{enter}');
        cy.get('.button').click();
        /* ==== End Cypress Studio ==== */
    });
});