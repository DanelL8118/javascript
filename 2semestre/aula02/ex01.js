const prompt = require("prompt-sync")();

let i, req, par=0, impar=0;

for (i = 0; i<10; i++) {

    req = Number(prompt('Digite o código do requerimento: '));

        while (req <= 0) { req = Number(prompt('Código incorreto! digite o código novamente: ')); }

    req%2 == 0?  par++ :
    impar++

} 

console.log('\n=====================================');
console.log('requerimentos pares:', par, '\nrequerimentos impares:', impar);
console.log('=====================================\n');