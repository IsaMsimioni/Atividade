var quadrantesMarcados = [];

var arrayIdComQuadrante = [
    "",  //index 0
    "linha1Coluna1", // index 1
    "linha1Coluna2", // index 2
    "linha1Coluna3", // index 3
    "linha2Coluna1", // index 4
    "linha2Coluna2", // index 5
    "linha2Coluna3", // index 6
    "linha3Coluna1", // index 7
    "linha3Coluna2", // index 8
    "linha3Coluna3", // index 9
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function adicionarXAqui(idCelula, quadrante){
    if(quadrantesMarcados.indexOf(quadrante) == -1 ) {
        preencheVelha(idCelula, "x", quadrante)
        efetuarJogadaDaMaquina();
    }
}

async function efetuarJogadaDaMaquina() {
    /*computador
        -> randomizar um quadrante   Math.floor(Math.random() * 10)
        -> validar se esse quadrante já foi  if()
        -> se foi marcado, gera um novo quadrante ->  Math.floor(Math.random() * 10)
        -> se nao foi marcado, marca marca-lo
    */

    await sleep(2000)

    var quadranteMaquina = Math.floor(Math.random() * 10);

    if (quadrantesMarcados.indexOf(quadranteMaquina) == -1 ) {
        console.log("NÃO ACHEI NENHUM QUADRANTE. Quandrante: " + quadranteMaquina );

        idQuadranteEscolhidoPelaMaquina = arrayIdComQuadrante[quadranteMaquina]

        preencheVelha(idQuadranteEscolhidoPelaMaquina, "0", quadranteMaquina)

    } else {
        console.log("ACHEI PREENCHIDO. Quandrante: " + quadranteMaquina );
        console.log("probleeeeema");
    }
}

function preencheVelha(idQuadrante, tipo, valorQuadrante) {
    if(valorQuadrante == 0) {
        return;
    }

    var elemento = document.getElementById(idQuadrante);
    if (tipo == "x") {
        elemento.innerHTML = "<i class='fas fa-times'></i>";
    } else {
        elemento.innerHTML = "<i class='far fa-circle'></i>";
    }
    quadrantesMarcados.push(valorQuadrante); //adiciona elementos a um array	
}