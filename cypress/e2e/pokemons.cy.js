describe('Покупка аватара', function () {

    beforeEach('Начало теста', function () {
        cy.visit('https://pokemonbattle.ru/');
    });
    it('Покупка аватара', function () {

        cy.get(':nth-child(1) > .auth__input').type("USER_LOGIN");
        cy.get('#password').type("USER_PASSWORD");
        cy.get('.auth__button').click();
        cy.wait(2000);
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type("4111 1111 1111 1111");
        cy.get(':nth-child(1) > .pay_base-input-v2').type("12/25");
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type("125");
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type("O G");
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type("56456");
        cy.get('.payment__submit-button').click();
        cy.contains("Покупка прошла успешно").should('be.visible');


    })

})