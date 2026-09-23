import PromptSync from "prompt-sync";
const prompt = PromptSync();

function sacar (saldo, saque) {

if (saque > saldo) { throw new Error (`Valor desejado maior que valor disponível!`)}

if (saque <= 0) { throw new Error (`Valor desejado menor ou igual a zero!`)}


return saldo - saque;

}

export {

sacar

};