class Animal {
    nome: string;
    som: string;

    constructor(nome: string, som: string) {
    this.nome = nome;
    this.som = som;
    }

    emitirSom(): string {
    return `${this.nome} faz ${this.som}`;
    }

   }

   class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, som: string, raca: string) {
    super(nome, som);
    this.raca = raca;
    }

    latirForte(): void {
        if (this.raca === "Labrador" || this.raca === "Pitbull" || this.raca === "Doberman" || this.raca === "Cane Corso") {
            this.som = "AU AU!"
        } else if (this.raca === "Chihuahua" || this.raca === "Poodle" || this.raca === "Shih Tzu") {
            this.som = "au au"
        } else {
            this.som = "AU"
        }
    }


   }

   const rex = new Cachorro("Rex", "au au", "Labrador");
   const presunto = new Cachorro("Presunto", "au au", "Chihuahua");

   console.log(`Raça: ${rex.raca}`);
   console.log(rex.emitirSom());
   rex.latirForte();
   console.log(rex.emitirSom());
 
   console.log(`Raça: ${presunto.raca}`);
   console.log(presunto.emitirSom());
   presunto.latirForte();
   console.log(presunto.emitirSom());