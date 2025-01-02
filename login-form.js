document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos de e-mail e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação simplificada
    if (email === '' || senha === '') {;
        alert('Por favor, preencha todos os campos!');
        return;
    }

    alert('Login realizado com sucesso!');
});
