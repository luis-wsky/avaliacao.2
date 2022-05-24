document.getElementById('criar').addEventListener('click', entrar);
function entrar() {
    let useEmail = document.querySelector('#email').value;
    let useSenha = document.querySelector('#senha').value;
    let useConfirma = document.querySelector('#confirma').value;
    let emailValido = validaEmail(useEmail);
    if (useEmail.length < 8) {
        alert('O Email deve ter no minimo 8 caracterers.');
        return;
    }
    else if (!emailValido) {
        alert('digite um email válido.');
        return;
    }
    else if (useSenha !== useConfirma) {
        alert("As senhas não conferem.");
        return;
    } else if (useSenha.length < 4) {
        alert('A senha deve ter no minimo 4 números.');
        return;
    }
    else if (useEmail === '' || useSenha === '' || useConfirma === '') {
        alert('preencha todos os campos.');
        return;
    }
    criarUsuario();
}
function criarUsuario() {
    if (localStorage.getItem('usuarios') == undefined) {
        let usuarios = [];
        let novoUsuario = {
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            recados: []
        }
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Usuário cadastrado.");
        let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('email').value);
        let identificacao = {
            usuario: document.getElementById('email').value,
            posicao: posicao
        } 
        sessionStorage.setItem("id", JSON.stringify(identificacao));
        window.location.href = 'home.html';
    }
    else {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let verificaEmail = usuarios.filter(exemplo => exemplo.email === document.getElementById('email').value);
        console.log(verificaEmail);
        if (verificaEmail.length > 0) {
            alert("Error, usuário já cadastrado.");
            return;
        }
        let novoUsuario =
        {
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            recados: []
        }
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso.");
        let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('email').value);
        let identificacao = {
            usuario: document.getElementById('email').value,
            posicao: posicao
        }
        sessionStorage.setItem("id", JSON.stringify(identificacao));
        window.location.href = 'home.html';
    }
}
function validaEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}