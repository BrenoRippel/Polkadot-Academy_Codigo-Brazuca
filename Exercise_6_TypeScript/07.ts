function formatarEntrada(valor: string | number | boolean): string | number | boolean {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 10;
    } else {
        return !valor; 
    }
}

console.log(formatarEntrada("typescript"));
console.log(formatarEntrada(5));
console.log(formatarEntrada(true));
console.log(formatarEntrada(false));