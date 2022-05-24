let acomodacao = JSON.parse(sessionStorage.getItem('id')).posicao;
let usuarios = JSON.parse(localStorage.getItem('usuarios'));
let valorRecado = "";
for (let marca in usuarios[acomodacao].recados) {
  valorRecado = document.createElement('tr');
  valorRecado.innerHTML = `<td>${marca}</td>
                            <td>${usuarios[acomodacao].recados[marca].descricao}</td>
                            <td>${usuarios[acomodacao].recados[marca].recado}</td>
                            <td><button class='btn-sm btn-danger' onclick='apagar(${marca})'>APAGAR</button> 
                            <button class='btn-sm btn-primary' onclick='editar(${marca})'>EDITAR</button></td>
                           `;
  document.querySelector('#corpo').appendChild(valorRecado);
}
document.querySelector('#adicionar').addEventListener('click', adicionar);
document.querySelector('#sair').addEventListener('click', sair);
function sair() {
  let resposta = confirm('Deseja sair do sistema?');
  if (resposta) {
    sessionStorage.removeItem('id');
    location.href = 'index.html';
  }
}
function editar(ddd) {
  let novaDescricao = prompt('Redigite.');
  let novoRecado = prompt('Redigite.');
  usuarios[acomodacao].recados[ddd].descricao = novaDescricao;
  usuarios[acomodacao].recados[ddd].recado = novoRecado;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("Recado editado.");
  location.reload();
}
function apagar(ddd) {
  let apagar = confirm("Apagar?");
  if (apagar) {
    usuarios[acomodacao].recados.splice(ddd, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    location.reload();
  }
}
function adicionar() {
  let descricao = document.querySelector('#descricao').value;
  let recado = document.querySelector('#recado').value;
  if (descricao === '' || recado === '') {
    alert('Ei, preencha todos os campos.');
    return;
  }
  let novoRecado = {
    descricao: descricao,
    recado: recado
  }
  usuarios[acomodacao].recados.push(novoRecado);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("Recado adicionado.");
  location.reload();
}

