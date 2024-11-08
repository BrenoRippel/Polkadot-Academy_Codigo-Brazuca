enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
    Natal = "Natal",
    AnoNovo = "Ano Novo",
    Independencia = "Dia da Independência"
}


function DiaEspecial(dia: DiasSemana): boolean {
    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo || dia === DiasSemana.Natal || dia === DiasSemana.AnoNovo || dia === DiasSemana.Independencia
}


console.log(DiaEspecial(DiasSemana.Segunda)); // false
console.log(DiaEspecial(DiasSemana.Terca)); // false
console.log(DiaEspecial(DiasSemana.Quarta)); // false
console.log(DiaEspecial(DiasSemana.Quinta)); // false
console.log(DiaEspecial(DiasSemana.Sexta)); // false
console.log(DiaEspecial(DiasSemana.Sabado)); // true
console.log(DiaEspecial(DiasSemana.Domingo)); // true
console.log(DiaEspecial(DiasSemana.Natal));  // true
console.log(DiaEspecial(DiasSemana.AnoNovo)); // true
console.log(DiaEspecial(DiasSemana.Independencia)); // true