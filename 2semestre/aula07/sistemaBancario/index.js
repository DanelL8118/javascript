import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { sacar } from "./banco.js";

try {

let saldo=0, saque=0;

saldo = Number(prompt(`Digite o saldo da conta: R$ `));
    while (saldo < 0) { saldo = Number(prompt(`Digite um saldo válido!: R$ `)); }


saque = Number(prompt(`Digite quanto deseja sacar: R$ `));

console.log(`\n====\nSaldo anterior: R$ ${saldo}\nSaque realizado: R$ ${saque}\nNovo saldo: R$ ${sacar(saldo, saque)}\n====`);

}

catch (error) {

console.log(`Erro encontrado: ${error.message}`);

}