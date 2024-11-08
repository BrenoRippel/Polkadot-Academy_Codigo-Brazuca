function reverterArray<T>(items: T[]): T[] {
    return items.reverse();
}

console.log(reverterArray([1, 2, 3]));
console.log(reverterArray(["a", "b", "c"]));

const misto = [1, 'a', 3, 'b', 5, 'c'];
console.log(reverterArray(misto));

const filtroImpares = [1, 2, 3, 4, 5, 6];
const resultadoFiltro = reverterArray(filtroImpares.filter(item => item % 2 === 0));
console.log(resultadoFiltro);

const resultadoMapeamento = reverterArray([1, 2, 3, 4].map(item => `Número: ${item}`));
console.log(resultadoMapeamento);