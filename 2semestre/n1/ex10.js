import promptSync from 'prompt-sync';
const prompt = promptSync();

function adicionarNota () {

    let novanota = Number(prompt(`Digite a nota que deseja adicionar: `));

        if ( novanota < 0 || novanota > 10 ) { throw new Error("nota menor do que 0 ou maior do que 10"); }

        else { return novanota; }

}

//função para adicionar notas

function calcularMedia (vetor, tamanho) {

    let i = 0;
    let soma = 0;
    let media = 0;

        for ( i=0; i<tamanho; i++) { soma += vetor[i]; }

    return media = soma / tamanho;

}

function maiorMenorSuperior (vetor, tamanho) {

let i=0;
let maior=0;
let menor=10;
let maiorsix=0;

    for ( i=0; i<tamanho; i++ ) {

        if (vetor[i] > maior) { maior = vetor[i]; }
        if (vetor[i] < menor) { menor = vetor[i]; }

        if (vetor[i] >= 6) { maiorsix++; }
    }

    console.log(`\n======\nESTATISTÍCAS\n======\nQuantidade de notas maiores ou iguais a 6: ${maiorsix}\nMaior nota: ${maior}\nMenor nota: ${menor}`);

}

//função para mostrar estatistícas

function ListarNotas (vetor, tamanho) {

let i=0;

    for ( i=0; i<tamanho; i++) {

        if (vetor[i] >= 6) { console.log(`\nNota: ${vetor[i]}\nSituação: APROVADO`); }

        else { console.log(`\nNota: ${vetor[i]}\nSituação: REPROVADO`); }
    }

}

//função para listar notas

try {

let notas = [];
let opc=0;
let quant=0;
let media=0;

    do {

        console.log(`\n======\nMENU\n======\n[ 1 ] - ADICIONAR NOVA NOTA\n[ 2 ] - VER RESULTADOS\n[ 0 ] - ENCERRAR\n`);
        opc = Number(prompt(`Digite a opção que deseja: `));
            while (opc < 0 || opc > 2) { opc = Number(prompt(`Digite uma opção válida: `)); }

            if ( opc == 1 ) { notas[quant] = adicionarNota(); quant++; }

            if ( opc == 2 && quant==0) { console.log(`\nAinda não há nenhuma nota adicionada!`); }

            if ( opc == 2 && quant>0 ) {

                console.log(`\n======\nRESULTADOS\n======\nMédia da turma: ${calcularMedia(notas, quant)}`);

                maiorMenorSuperior(notas, quant);

                ListarNotas(notas, quant);

            }

    } while (opc != 0);

console.log(`\nSaindo...`);

} 

catch (error) {

    console.log(`Erro! : ${error.message}`);

}