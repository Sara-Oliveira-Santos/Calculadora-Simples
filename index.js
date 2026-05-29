const visor = document.getElementById('visor');

function adicionarAoVisor(valor) {
    visor.value += valor;
}

function limparTudo() {
    visor.value = "";
}

function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcularResultado() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = "Erro";
    }
}

//Testando sem o onclick no html
document.querySelectorAll('.numero').forEach(botao => {
    botao.addEventListener('click', () => adicionarAoVisor(botao.value));
});

document.querySelectorAll('.operador').forEach(botao => {
    botao.addEventListener('click', () => adicionarAoVisor(botao.value));
});

document.getElementById('limparTudo').addEventListener('click', (e) => {
    e.preventDefault();
    limparTudo();
});

document.getElementById('limparUltimoNum').addEventListener('click', (e) => {
    e.preventDefault();
    apagarUltimo();
});

document.getElementById('igual').addEventListener('click', (e) => {
    e.preventDefault();
    calcularResultado();
});