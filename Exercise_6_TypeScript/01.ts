let nome: string = "Breno";
let idade: number = 27;
let ativo: boolean = true;
let hobbies: string[] = ["Leitura", "Cripto", "Degenning", "História", "Codar"];
let endereco: { bairro: string; cidade: string; estado: string } = { bairro: "Jardim Atlântico", cidade: "Florianópolis",
estado: "SC" };
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.bairro} - ${endereco.cidade} - ${endereco.estado}`);