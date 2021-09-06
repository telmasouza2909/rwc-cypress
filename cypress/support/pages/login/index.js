const el = require('./elements').ELEMENTS
import Routes from '../../routes'
class Login {

    acessarLogin() {
        // acessar a pagina de login
        cy.visit('login');
    }

    preencherFormulario() {
        // preencher o formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submeterFormulario() {
        // sbumeter o formulario
        cy.get(el.buttonSubmit).click();
    }

    confirmacaoLogado() {

        cy.wait(`@${Routes.as.postUsers}`).then((postUsers) => {
            expect(postUsers.response.statusCode).to.eq(200);

        //cy.wait(`@${Routes.as.postUsers}`, {timeout: 15000});
        });
        

        cy.wait(`@${Routes.as.getTags}`).then((getTags) => {
           expect(getTags.response.statusCode).to.eq(200);

        //cy.wait(`@${Routes.as.getTags}`, {timeout: 15000});
        });



        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getArticlesFeed) => {
            expect(getArticlesFeed.response.statusCode).to.eq(200);

        //cy.wait(`@${Routes.as.getArticlesFeed}`, {timeout: 15000});
        });



        cy.get(el.ulAutenticado).should('be.visible')
    }

}

export default new Login();
