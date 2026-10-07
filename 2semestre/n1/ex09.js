import promptSync from 'prompt-sync';
const prompt = promptSync();

function validarSenha (senha) {

    let senhaCorreta = "web2026";

        if ( senha === senhaCorreta) { return true; }

        else { return false; }

}

//função para validação da senha

let i=0;
let validacao = true;

    for ( i=0; i<3 && validacao; i++) {

    let tentativa = String(prompt(`(Máximo de 3 tentativas! tentativa atual: ${i+1}) Digite sua senha: `));

        if (validarSenha(tentativa)) { 
        
            console.log(`\nSenha correta! Bem-vindo!`);
            validacao = false; 
        }

        else { console.log(`\nSenha incorreta!`); }

    }

if (validacao == true) { console.log(`\nNúmero máximo de tentativas atingidas! acesso bloqueado`); }
