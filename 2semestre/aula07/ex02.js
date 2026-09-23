import PromptSync from "prompt-sync";
const prompt = PromptSync();


function fibonnaci ( a ) {

let i, fibo = 1, num=0;

    if (a <= 0) { throw new Error(`Valor inválido: menor ou igual a 0!`); }
    if (isNaN(a)) { throw new Error(`Valor inválido: caractere inválido!`); }

    for (i = 1; i < a; i++) {

        fibo = fibo + num;
        num = fibo - num;

    }

    return fibo;

}

try {

let num=0;

num = Number(prompt(`Digite a posição do fibbonaci que deseja: `));

console.log(`\n====\nNúmero na posição ${num} é igual a ${fibonnaci(num)}\n====\n`);

} catch (error) {

    console.log(`\n${error.message}\n`);

}