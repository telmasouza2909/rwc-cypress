/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'



        context('Publicações', () => {

            beforeEach(() => {
                // Arrange (Preparação) - inicio
                Routes.initArticles();
                cy.backGroundLogin();
                articles.acessarFormularioDePublicacao();
                // Arrange (Preparação) - fim
            });
        
            it('Criar uma nova publicação 1', () => {
                // Arrange (Preparação)
                articles.preencherFormulario();
                // Action (Execução)
                articles.submeterPublicacao();
                // Assert (Validação)
                articles.validarSubmissaoPublicacao();
            });
        
            it('Criar uma nova publicação 2', () => {
                // Arrange (Preparação)
                articles.preencherFormulario();
                // Action (Execução)
                articles.submeterPublicacao();
                // Assert (Validação)
                articles.validarSubmissaoPublicacao();
            });
        });
        
    //Preciso inicializar as rotas antes de cada testes? -> Não, somente uma vez
    // o que acontece se eu mudar o apelido de uma rota? -> Contrato    

    // hoocks -> são scripts executados momentos antes / depois do teste, exemplo:
    // before (antes de todos os testes) / beforeEach -> (antes de cada teste)
    // after (antes de todos os testes) / afterEach (antes de cada teste)


    /// -> Arrange Act Assert
    // PAN -> Preparação - Ação - Verificação/Validação

    // Ferramenta para anotações como "notion.so ou notepad ou visual studio"