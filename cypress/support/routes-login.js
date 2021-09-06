/// <reference types="cypress" />
class RoutesLogin {
    as = {
        postUsers: 'postUsers',
        getTags: 'getTags',
        getArticlesFeed: 'getArticlesFeed'
    }

    initLogin() {
        cy.intercept('POST', '**/api/users/login').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);
        
    }
}

export default new RoutesLogin()