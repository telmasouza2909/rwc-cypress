class Routes {
    as = {
        postUsers: 'postUsers',
        getTags: 'getTags',
        getArticlesFeed: 'getArticlesFeed',
        getProfiles: 'getProfiles',
        getArticlesAuthor: 'getArticlesAuthor',
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesComments: 'getArticlesComments'
    }

    initLogin() {
        cy.intercept('POST', '**/api/users/login', {
            statusCode: 200,
            body: {}
        }).as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags',{
            statusCode: 200,
            body: {}
        }).as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**', {
            statusCode: 200,
            body: {}
        }).as(this.as.getArticlesFeed);
    }

    initCadastro() {
        cy.intercept('POST', '**/api/users', {
            statusCode: 200,
            body: {}
        }).as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags', {
            statusCode: 200,
            body: {}
        }).as(this.as.getTags);
        cy.intercept('GET', '**/api/articles/feed**', {
            statusCode: 200,
            body: {}
        }).as(this.as.getArticlesFeed);
        cy.intercept('GET', '**/api/profiles/**', {
            statusCode: 200,
            body: {}
        }).as(this.as.getProfiles);
        cy.intercept('GET', '**/api/articles**', {
            statusCode: 200,
            body: {}
        }).as(this.as.getArticlesAuthor);
    }

    initArticles() {
        cy.intercept('POST', '**/api/articles', {
            statusCode: 200,
            body: {}
        }).as(this.as.postArticles);

        cy.intercept('GET', '**/api/articles/agilizei-titulo-**', {
            statusCode: 200,
            body: {}
        }).as(this.as.getArticlesTitle);
        
        cy.intercept('GET', '**/api/articles/agilizei-titulo-**/comments', {
            statusCode: 200,
            body: {}
        }).as(this.as.getArticlesComments);
    }
}

export default new Routes()