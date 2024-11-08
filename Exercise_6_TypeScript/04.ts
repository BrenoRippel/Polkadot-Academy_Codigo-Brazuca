function calcularMedia(numeros: number[]): number {
    const total = numeros.reduce((acc, numero) => acc + numero, 0);
    return total / numeros.length;
   }
   console.log(calcularMedia([-2.8, 10.5, 7.7, -1.3, 20.75, 8.2, 7.25, -10]));
   