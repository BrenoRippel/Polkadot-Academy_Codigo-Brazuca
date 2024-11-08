function filtrarEAlterarPrecos(precos: number[], corte: number): number[] {
    return precos
        .filter(preco => preco > corte)
        .map(preco => Math.round(preco * 1.1 * 100) / 100);
}

console.log(filtrarEAlterarPrecos([50, 150, 200, 30], 100));