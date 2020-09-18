const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

const resultado2 = nota => nota < 7 ? 'Reprovado' : 'Aprovado' 


console.log(resultado(7.1))
console.log(resultado(6.7))