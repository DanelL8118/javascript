import promptSync from 'prompt-sync';
const prompt = promptSync();

try {

let numero = Number(prompt("digite um número: "));

if (isNaN(numero)) { throw new Error('valor inválido')}

console.log(`Número válido: ${numero}`);

} catch (error) {

console.log(`erro: ${error.message}`);

} finally {

console.log(`número verificado!`)

}