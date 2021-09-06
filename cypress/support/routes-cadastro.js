/// <reference types="cypress" />
class RoutesCadastro {
    as = {
        postUsers: 'postUsers',
        getTags: 'getTags',
        getArticlesFeed: 'getArticlesFeed',
        getProfiles: 'getProfiles',
        getArticlesAuthor: 'getArticlesAuthor'
    }

    initCadastro() {
        cy.intercept('POST', '**/api/users').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
        cy.intercept('GET', '**/api/profiles/**').as(this.as.getProfiles);
        cy.intercept('GET', '**/api/articles**').as(this.as.getArticlesAuthor);
    }
}

export default new RoutesCadastro()
