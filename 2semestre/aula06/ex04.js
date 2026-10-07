import promptSync from 'prompt-sync';
const prompt = promptSync();

class ErroDeValidação extends Error {

    constructor (mensagem) {

            super(mensagem);
            this.name = "ErroDeValidação";

    }
}

function calcularAreaTriangulo (base, altura) {
 
    if (base <= 0 || altura <= 0) { throw new ErroDeValidação('Valores menores que zero!'); }

    else if (isNaN(base) || isNaN(altura)) { throw new Error('Valores diferente de números!'); }

    return base * altura / 2;
}

try {

let base, altura, area;

base = Number(prompt(`digite um valor para a base: `));
altura = Number(prompt(`digite um valor para a altura: `));

area = calcularAreaTriangulo(base, altura)

console.log(`Área: ${area}`);

} catch (error) {

    if (error instanceof ErroDeValidação) { console.log(`Erro de validação: ${error.message}`); }

    else { console.log(`Erro inesperado: ${error.message}`); }

}