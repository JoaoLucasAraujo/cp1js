// Array para armazenar os vinhos
var vinhos = [];

// Função para adicionar um novo vinho
function adicionarVinho() {
    var nome = prompt("Nome do vinho:");
    var tipo = prompt("Tipo do vinho:");
    var safra = prompt("Safra do vinho:");
    var preco = prompt("Preço do vinho:");

    // Criar um objeto para representar o vinho
    var novoVinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        preco: preco
    };

    // Adicionar o novo vinho ao array de vinhos
    vinhos.push(novoVinho);
}

// Função para listar todos os vinhos adicionados
function listarVinhos() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpar o conteúdo anterior

    for (var i = 0; i < vinhos.length; i++) {
        var vinho = vinhos[i];
        var vinhoInfo = "Nome: " + vinho.nome + ", Tipo: " + vinho.tipo + ", Safra: " + vinho.safra + ", Preço: " + vinho.preco + "<br>";
        resultadoDiv.innerHTML += vinhoInfo;
    }
}