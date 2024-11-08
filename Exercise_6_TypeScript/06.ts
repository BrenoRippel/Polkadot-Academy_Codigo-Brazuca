function buscarDados(): Promise<string> {
    const tempoResposta = Math.floor(Math.random() * 5000) + 1000;

    return new Promise(resolve => {
        setTimeout(() => resolve("Dados carregados"), tempoResposta);
    });
}

async function exibirDados(chamada: number) {
    console.log(`Iniciando a busca de dados da chamada ${chamada}...`);
    const dados = await buscarDados();
    console.log(`Chamada ${chamada} finalizada: ${dados}`);
}

exibirDados(1);
exibirDados(2);
exibirDados(3);
exibirDados(4);
exibirDados(5);