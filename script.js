const botaoAdicionar = document.getElementById('btnAdicionar');
const campoTexto = document.getElementById('novoAprovado');
const listaAprovados = document.getElementById('listaAprovados');

botaoAdicionar.addEventListener('click', function() {
    const nome = campoTexto.value;

    if (nome.trim() !== '') {
        const novoitem = document.createElement('li');
        novoitem.textContent = nome;
        listaAprovados.appendChild(novoitem);
        campoTexto.value = '';
        campoTexto.focus();
    }else {
        alert('Por favor, insira um nome válido.');
    }
});