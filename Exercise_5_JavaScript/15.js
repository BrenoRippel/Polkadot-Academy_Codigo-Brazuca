function countCharacter(str, character) {
    let count = 0
    str = str.toLowerCase()
    character = character.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (str[i] === character) {
            count++
        }
    }

    return count
}

console.log(countCharacter("O RATO ROEU A ROUPA DO REI DE ROMA", "o"));
