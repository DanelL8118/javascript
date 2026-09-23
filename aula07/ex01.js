import PromptSync from "prompt-sync";
const prompt = PromptSync();

function ehPrimo ( a ) {

    let i;

    if ( a < 2 ) { throw new Error("Valor menor do que 2 inválido!"); }
    if ( isNaN(a) ) { throw new Error("Valor não é um número!"); }

    for (i = 2; i <= a/2; i++) {
        
        if ( Math.trunc(a%i == 0) ) { return false; }

    }

    return true;

}

try {

let numero;

numero = Number(prompt(`Digite o número que deseja testar: `));

if (ehPrimo(numero) == true) { console.log(`\nO número digitado é primo!`); }

else { console.log(`\nO número digitado não é primo!`); }

} 

catch (error) {

    console.log(`Erro na execução: ${error.message}`);

}