//let prata = 0;
//let saude = 0;

//const cacarola = document.querySelector('#cacarola');
//const verruguinha = document.querySelector('#verruguinha');
//const saca_rolha = document.querySelector('#saca-rolha');

//Variaveis para mudar na tela ao começar o jogo
//const titulo = document.querySelector('#titulo');
//const subtitulo1 = document.querySelector('#c1');
//const subtitulo2 = document.querySelector('#c2');
//const subtitulo3 = document.querySelector('#c3');
//const img1 = document.querySelector('#img1');
//const img2 = document.querySelector('#img2');
//const img3 = document.querySelector('#img3');
//const text_personagem = document.querySelector('.text-info-personagem');

//const info_player = document.querySelector('.info-player'); 
//const player_prata = document.querySelector('#player-prata');
//const player_saude = document.querySelector('#player-saude');

//console.log('Prata inicial: ' + prata);
//console.log('Saúde inicial: ' + saude);

//function cacarolaSelecionado() {
  //  console.log('Clicado!');
    //prata = 100;
    //saude = 100;
    //console.log('Prata agora: ' + prata);
    //console.log('Saúde agora: ' + saude);

    //info_player.style.display = 'block';
    //player_prata.innerText = prata;
    //player_saude.innerText = saude;

    //comecarJogo();

//}

/*
function comecarJogo() {

    titulo.innerText = 'Qual o seu destino?';
    subtitulo1.innerText = 'Loja';
    subtitulo2.innerText = 'Guerra';
    subtitulo3.innerText = 'Ganha-pão';

    img1.setAttribute('src', 'image/fundo-loja-clara.jpg');
    img2.setAttribute('src', 'image/fundo-arena-clara.jpg');
    img3.setAttribute('src', 'image/fundo-missoes-clara.jpg');

    text_personagem.style.display = 'none';

    cacarola.innerText = 'Lojinha';
    verruguinha.innerText = 'Arena';
    saca_rolha.innerText = 'Missões';

}
*/
//Começando de novo
const body = document.querySelector('.estrutura');
const cabecalho_jogo = document.querySelector('.cabecalho-jogo');
const prata_text = document.querySelector('#info-prata');
const saude_text = document.querySelector('#info-saude');
const arma_text = document.querySelector('#info-arma');

const titulo = document.querySelector('#info-titulo');
const subtitulo_1 = document.querySelector('#subtitulo-escolha1');
const subtitulo_2 = document.querySelector('#subtitulo-escolha2');
const subtitulo_3 = document.querySelector('#subtitulo-escolha3');
const img_1 = document.querySelector('#img-1');
const img_2 = document.querySelector('#img-2');
const img_3 = document.querySelector('#img-3');
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const info_persona = document.querySelector('.info-persona');

let prata = 0;
let saude = 0;

function startGame() {

    cabecalho_jogo.style.display = 'flex';
    body.style.backgroundImage = "url(image/Fundo-Praca.jpg)";

    titulo.innerText = "Qual o seu destino?";
    subtitulo_1.innerHTML = "Loja";
    subtitulo_2.innerHTML = "Arena";
    subtitulo_3.innerHTML = "Missões";

    img_1.setAttribute('src', 'image/fundo-loja-clara.jpg');
    img_2.setAttribute('src', 'image/fundo-arena-clara.jpg');
    img_3.setAttribute('src', 'image/fundo-missoes-clara.jpg');

    btn_1.innerText = "Lojinha";
    btn_2.innerHTML = "Caverna";
    btn_3.innerHTML = "Ganha-Pão";

    info_persona.style.display = 'none';

}

function personagemCacarola() {
    console.log('Clicado');

    prata = 100;
    saude = 100;

    startGame();

    prata_text.innerHTML += prata;
    saude_text.innerHTML += saude;
}