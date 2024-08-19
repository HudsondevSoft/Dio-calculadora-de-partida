function calcularNivel(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determinar o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibir a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função
let vitorias = 35;  // Defina o número de vitórias
let derrotas = 10;  // Defina o número de derrotas

calcularNivel(vitorias, derrotas);
