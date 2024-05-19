var a = window.document.getElementById('area');

a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function entrar() {
    a.style.backgroundColor = 'green';
}

function sair() {
    a.style.backgroundColor = 'yellow';
}

