let prata = 0;
let saude = 0;

const cacarola = document.querySelector('#cacarola');
const verruguinha = document.querySelector('#verruguinha');
const saca_rolha = document.querySelector('#saca-rolha');

const titulo = document.querySelector('#titulo');

console.log('Prata inicial: ' + prata);
console.log('Saúde inicial: ' + saude);

function cacarolaSelecionado() {
    console.log('Clicado!');
    prata = 100;
    saude = 100;
    console.log('Prata agora: ' + prata);
    console.log('Saúde agora: ' + saude);
}
