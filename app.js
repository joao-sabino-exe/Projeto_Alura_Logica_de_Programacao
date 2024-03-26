let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let numeroTentativas = 1;


function mensagemHTML(tag, texto){
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale', {rate:1.2});
}

function mensagemInicial (){
    mensagemHTML('h1', 'Jogo do número secreto');
    mensagemHTML('p', 'Digite um valor de 1 a 10:');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute){
        let mensagemTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Você descobriu o numero secreto com ${numeroTentativas} ${mensagemTentativa}.`;
        mensagemHTML('h1', 'Parabéns, você acertou!!');
        mensagemHTML('p', mensagemAcertou);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto){
        mensagemHTML('h1', 'Você errou!');
        mensagemHTML('p', 'O numero secreto é menor que o valor digitado!');
    }
    else {
        mensagemHTML('h1', 'Você errou!');
        mensagemHTML('p', 'O numero secreto é maior que o valor digitado!');
    }
    numeroTentativas ++;
    limparCampo();
}

function novoJogo() {
    numeroSecreto = gerarNumeroSecreto();
    numeroTentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        //console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

