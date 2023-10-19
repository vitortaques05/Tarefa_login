//index.js

function login() {
    // Variáveis que salvam os valores dos campos de email e senha
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    // Recupera os dados de cadastro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validação dos campos (verifica se estão preenchidos)
    if (!email || !senha) {
        document.getElementById('result').innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    // Verifica se o email e senha correspondem a um usuário
    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
        // Marca o usuário como autenticado
        user.authenticated = true;
        // Salva a lista atualizada de usuários no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('result').innerHTML = 'Login bem-sucedido';
        // Redirecione o usuário para a página principal após o login bem-sucedido
        window.location.href = '/produtos.html'; // Altere a URL de redirecionamento conforme necessário
    } else {
        document.getElementById('result').innerHTML = 'Credenciais de login inválidas';
    }
}


function register() {
    // Variáveis que salvam os valores dos campos de nome, email e senha
    const nome = document.getElementById('register-nome').value;
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-senha').value;

    // Recupera os dados de cadastro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validação dos campos (verifica se estão preenchidos e se a senha tem pelo menos 8 caracteres)
    if (!nome || !email || !senha || senha.length < 8) {
        document.getElementById('result').innerHTML = 'Por favor, preencha todos os campos e garanta que a senha tenha pelo menos 8 caracteres.';
        return;
    }

    // Registra o nome, email e senha no banco de dados
    users.push({ nome, email, senha });

    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('result').innerHTML = 'Cadastro bem-sucedido';
    // Você pode redirecionar o usuário para a página de login ou outra página após o cadastro bem-sucedido, se desejar.

}

function checkAuthentication() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.authenticated === true);
    return user !== undefined;
}
