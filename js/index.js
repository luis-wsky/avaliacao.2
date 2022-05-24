document.getElementById('login').addEventListener('click', entrar);
function entrar() {
    if (localStorage.getItem('usuarios') == undefined) {
        alert("Error, algo errado, retorne.");
        limpaCampos();
        return;
    }
    else {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let analisarDados = usuarios.filter(exemplo => exemplo.email === document.getElementById('email').value && exemplo.senha === document.getElementById('senha').value);
        console.log(analisarDados);
        if (analisarDados.length > 0) {
            let posicao = usuarios.findIndex(elemento => elemento.email === document.getElementById('email').value);
            let identificacao = {
                usuario: analisarDados[0].email,
                posicao: posicao
            } 
            sessionStorage.setItem("id", JSON.stringify(identificacao));
            window.location.href = 'home.html';
        }
        else {
            alert("Error, algo errado, retorne.");
            limpaCampos();
        }
    }
}
function limpaCampos() {
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}
