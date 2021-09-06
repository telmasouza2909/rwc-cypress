import login from '../support/pages/login'
import Routes from '../support/routes'

context('Login', { browser: '!firefox' }, () => {
    beforeEach(() => {
        // Arrange (Preparação)
        Routes.initLogin();
    });
    it('Realizar login com sucesso', () => {
        // Arrange (Preparação)
        login.acessarLogin();
        // Action (Execução)
        login.preencherFormulario();
        login.submeterFormulario();
        // Assert (Validação)
        login.confirmacaoLogado();
    });
});