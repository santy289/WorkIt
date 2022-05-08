describe('Navigate and edit profile', ()=>{
    it('succesfuly navigate and edit profile',()=>{
        cy.visit('/');
        cy.get('.Header_nav > [href="/purchases"]').click();
        cy.get('.Header_nav > :nth-child(2)').click();
        cy.get('.Header_nav > :nth-child(4)').click();
        cy.get('#username').clear();
        cy.get('#username').type('userdemo1');
        cy.get('#password').clear();
        cy.get('#password').type('123{enter}');
        cy.get('.button').click();
        cy.get('.container').click();
        cy.get('.container').click();
        cy.get('.Header_nav > [href="/sales"]').click();
        cy.get('.Header_nav > [href="/purchases"]').click();
        cy.get('.Header_nav > [href="/"]').click();
        cy.get('.Header_nav > [href="/auth/profile"]').click();
        cy.get('.userProfileButton').click();
        cy.get(':nth-child(10) > #name').clear();
        cy.get(':nth-child(10) > #name').type('Calle #12 23-46');
        cy.get('.button').click();
    });
});