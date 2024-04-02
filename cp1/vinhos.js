
var vinhos = [];


function adicionarVinho() {
    var nome = prompt("Nome do vinho:");
    var tipo = prompt("Tipo do vinho:");
    var safra = prompt("Safra do vinho:");
    var preco = prompt("Preço do vinho:");

    var novoVinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        preco: preco
    };

    
    vinhos.push(novoVinho);
}


function listarVinhos() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (var i = 0; i < vinhos.length; i++) {
        var vinho = vinhos[i];
        var vinhoInfo = "Nome: " + vinho.nome + ", Tipo: " + vinho.tipo + ", Safra: " + vinho.safra + ", Preço: " + vinho.preco + "<br>";
        resultadoDiv.innerHTML += vinhoInfo;
    }
}