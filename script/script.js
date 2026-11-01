
const texto = document.getElementById("texto-digitado");

const frases = [
    "suporte de TI",
    " em redes de computadores",
    "buscando uma oportunidade"
];

let indiceFrase = 0;
let indiceLetra = 0;
let apagando = false;

function digitar() {
    const frase = frases[indiceFrase];

    if (apagando) {
        indiceLetra--;
    } else {
        indiceLetra++;
    }

    texto.textContent = frase.substring(0, indiceLetra);

    let velocidade = apagando ? 50 : 100;

    if (!apagando && indiceLetra === frase.length) {
        apagando = true;
        velocidade = 1500;
    } else if (apagando && indiceLetra === 0) {
        apagando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        velocidade = 400;
    }

    setTimeout(digitar, velocidade);
}

digitar();
