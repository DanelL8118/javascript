import promptSync from 'prompt-sync';
const prompt = promptSync();

try {

var lista = [];

lista.push(1);

console.log(lista)

} catch (error) {

console.log(error.name);
console.log(error.message);

} 