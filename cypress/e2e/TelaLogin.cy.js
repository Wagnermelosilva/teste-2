describe('Testar a pagina de login', () => {
        

    it('Testar a tela de login com usuario valido', () => {
        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('[data-test="username"]').type('standard_user');

        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        
    });

});