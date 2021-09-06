import Routes from '../../routes';

const faker = require('faker');
const el = require('./elements').ELEMENTS

let inputTitle = 'Agilizei Titulo';
class Articles {

    acessarFormularioDePublicacao() {
        // acessar o formulario para publicar artigo
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario() {
        // preencher o formulario
        cy.get(el.inputTitle).type(inputTitle);
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress');
    }

    submeterPublicacao() {
        // sbumeter o formulario
        cy.get(el.buttonSubmit).click();
    }

    validarSubmissaoPublicacao() {
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200);
        })
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.response.statusCode).to.eq(200);
        })
        cy.wait(`@${Routes.as.getArticlesComments}`).then((getArticlesCommentsResponse) => {
            expect(getArticlesCommentsResponse.response.statusCode).to.eq(200);
        });

        

        cy.get(el.h1Artigo).should('contain.text', inputTitle);
        cy.url().should('contain', inputTitle.split(' ')[0].toLowerCase());
    }
}

export default new Articles();