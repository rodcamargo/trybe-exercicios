let peca = "BISPo" ;

switch (peca.toLowerCase()) {
    case "peão":
        console.log("Peão -> Apenas uma casa pra frente, no primeiro movimento podem ser 2 casas.");
        break;
    
    case "torre":
        console.log("Torre -> Movimentos horizontais e verticais.");
        break;
    
    case "bispo":
        console.log("Bispo -> Movimentos diagonais.");
        break;

    case "cavalo":
        console.log("Movimentos em 'L'.");
        break;

    case "rainha":
        console.log("Rainha -> Movimentos diagonais, verticais e horizontais.");
        break;

    case "rei":
        console.log("Rei -> Qualquer lado, uma casa por vez.");
        break;

    default:
        console.log("Erro");
}

