var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var VencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var placarX = document.getElementById('placar-X');
var placarO = document.getElementById('placar-O');

var valor = null;
var counterVal = 0;

aleatorio = randomNumber(1, 2)

if (aleatorio === 1){
    var valor = 'X';
} else {
    var valor = 'O';
}

mudarJogador(valor);

function escolherQuadrado(id){

    if (vencedor !== null) {
        return;
    }


var quadrado = document.getElementById(id);
if (quadrado.innerHTML !== '-'){
    return;
}

quadrado.innerHTML = jogador;
quadrado.style.color = '#000';

if (jogador === 'X') {
    jogador = 'O';
} else {
    jogador = 'X';
}

    (++counterVal);


    mudarJogador(jogador);
    checarVencedor();
}

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b -a +1)) + a
}


function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function checarVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado4);
        return;
    }

    if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

    if (counterVal === 9){
        mudarCorQuadradoV(quadrado1, quadrado3, quadrado4, quadrado6, quadrado8);

        return;
    }



}


let countX = 0;
let countO = 0;

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    VencedorSelecionado.innerHTML = vencedor;

    if (vencedor === 'X'){  
        countX++;      
        placarX.innerHTML = countX ;
    }
    if (vencedor === 'O'){  
        countO++;      
        placarO.innerHTML = countO ;
    }
}

function mudarCorQuadradoV(quadrado1, quadrado2, quadrado3, quadrado4, quadrado5) {
    quadrado1.style.background = '#c00';
    quadrado2.style.background = '#c00';
    quadrado3.style.background = '#c00';
    quadrado4.style.background = '#c00';
    quadrado5.style.background = '#c00';
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual;
}

function resetCounter() {
    counterVal = 0;
}

function reiniciar(){
    vencedor = null;
    VencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i)
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-';
    }

    aleatorio = randomNumber(1, 2)

    if (aleatorio === 1){
    var valor = 'X';
    } else {
    var valor = 'O';
    }

    mudarJogador(valor);

    counterVal = 0;
}
