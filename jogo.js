const prompt = require("prompt-sync")();


function menu(){
console.log("\n1 - Add Lista \n2 - Remover  \n3 - Buscar\n4 - Listar Jogadores\n5 - Atualizar Pontos\n0 - Sair");
}
function add(){
    let jogador = {
        nome: prompt("Digite nome: "),
        funcao: prompt("Digite a função: "),
        pontuacao: Number(prompt("Digite a pontuaçao: ")),
        ativo : true
    };


    jogadores.push(jogador);
    console.log("Jogador Cadastrado!");
}
function remover(){
    if (jogadores.length === 0) {
        console.log("Não há jogador cadastrado!");
        return;
    }
    let nome_remover = prompt("Digite o nome que você quer remover: ");
    let index = jogadores.findIndex(jogador => jogador.nome === nome_remover);
    if(index === -1){
        console.log("Nome nao encontrado...");
        return;
    }else{
        jogadores.splice(index, 1);
        console.log("Removendo...."+nome_remover);
        return;
    }
}
function buscar(){
    let buscar = prompt("Digite o nome do jogador a Buscar: ");
    let jogador = jogadores.find(jogador => jogador.nome === buscar);
    if(!jogador){
        console.log("Jogador nao encontrado...");
        return;
    }else{
        console.log("--------------Encontrado-------------");
        console.log("Nome: "+jogador.nome);
        console.log("Função: "+jogador.funcao);
        console.log("Pontuação: "+jogador.pontuacao);
        console.log("Ativo: "+jogador.ativo);
        return;
    }
}
function listar(){
    if (jogadores.length===0) {
        console.log("Não a jogador Cadastrado");
        return;
    }else{
        for (let i = 0; i < jogadores.length; i++) {
            console.log("Nome: "+jogadores[i].nome+"\nFunção: "+ jogadores[i].funcao+"\nPontuaçao: "+jogadores[i].pontuacao+"\nAtivo: "+jogadores[i].ativo);
            console.log("-----------------------------------");
        }
    }
}
function atualizarPontos(){
    let nome_atualizar = prompt("Digite o nome do Jogador: ");
    for (let index = 0; index < jogadores.length; index++) {
        if (jogadores[index].nome === nome_atualizar) {
            nova_points = Number(prompt("Digite a nova pontuaçao do "+nome_atualizar+" :"));
            jogadores[index].pontuacao = nova_points;
            console.log("Pontução atualizada!");
            return;
        }
    }
    console.log("Jogador "+nome_atualizar+" não encontrado!");
    return;
}




let jogadores = [];
let continua = true;
while (continua) {
    menu();
    let opcao = Number(prompt("Escolha sua Opção: "));
    switch (opcao) {
        case 0:
            console.log("Saindo...");
            continua = false;
            break;  
        case 1:
            add();
            break;
        case 2:
            remover();
            break;
        case 3:
            buscar();
            break;
        case 4:
            listar();
            break;
        case 5:
            atualizarPontos();
            break;
        default:
            console.log("Opção Inválida!")
            break;
    }
   
}
