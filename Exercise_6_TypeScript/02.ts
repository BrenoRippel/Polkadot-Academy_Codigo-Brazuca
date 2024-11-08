function saudacao(nome: string, idade?: number, raca?: string, localizacao?: string, profissao?: string): string {
    if (idade && raca && localizacao && profissao) {
      return `Saudações, ${nome} da raça ${raca}! Você tem ${idade} anos, reside em ${localizacao} e é ${profissao}.`;
    } else if (idade && raca && profissao) {
      return `Saudações, ${nome} da raça ${raca}! Você tem ${idade} anos e é ${profissao}.`;
    } else if (raca && localizacao && profissao) {
      return `Saudações, ${nome} da raça ${raca}, de ${localizacao}, onde atua como ${profissao}.`;
    } else if (raca && profissao) {
      return `Saudações, ${nome} da raça ${raca}, que exerce a profissão de ${profissao}.`;
    } else if (idade && raca) {
      return `Saudações, ${nome} da raça ${raca}! Você tem ${idade} anos.`;
    } else if (raca && localizacao) {
      return `Saudações, ${nome} da raça ${raca}, de ${localizacao}.`;
    } else if (idade) {
      return `Saudações, ${nome}! Você tem ${idade} anos.`;
    } else {
      return `Saudações, ${nome}!`;
    }
  }
  
  console.log(saudacao("Aragorn", 87, "Humano", "Gondor", "Rei"));
  console.log(saudacao("Legolas", 2931, "Elfo", "Floresta das Trevas", "Arqueiro"));
  console.log(saudacao("Frodo", 50, "Hobbit", "Condado"));
  console.log(saudacao("Gandalf", undefined, "Maia", "Valfenda", "Mago"));
  console.log(saudacao("Gimli", 139, "Anão", "Montanhas Sombrias", "Guerreiro"));