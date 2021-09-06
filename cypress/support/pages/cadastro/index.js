import Routes from '../../routes';

const faker = require('faker');

const el = require('./elements').ELEMENTS
let fullName = faker.name.firstName() + " " + faker.name.lastName();

class Cadastro {

    acessarFormularioDeCadastro() {
        // acessar a pagina de registro
        cy.visit('register');
    }

    preencherCadastro() {
        // preencher cadastro
        cy.get(el.inputUserName).type(fullName);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(123456789);
    }

    submeterCadastro() {
        // sbumeter o formulario
        cy.get(el.buttonSubmit).click();
    }

    validarCadastroSucesso() {
        cy.wait(`@${Routes.as.postUsers}`).then((postUsers) => {
            expect(postUsers.response.statusCode).to.eq(200);
        });
        cy.wait(`@${Routes.as.getTags}`).then((getTags) => {
            expect(getTags.response.statusCode).to.eq(200);
        });
        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getArticlesFeed) => {
            expect(getArticlesFeed.response.statusCode).to.eq(200);
        });

        cy.get(el.linkUserName).should('contain.text', fullName).click()
        cy.get(el.h4UserName).should('contain.text', fullName)

        cy.wait(`@${Routes.as.getProfiles}`).then((getProfiles) => {
            expect(getProfiles.response.statusCode).to.eq(200);
        });
        cy.wait(`@${Routes.as.getArticlesAuthor}`).then((getArticlesAuthor) => {
            expect(getArticlesAuthor.response.statusCode).to.eq(200);
        });
    }

}
export default new Cadastro();