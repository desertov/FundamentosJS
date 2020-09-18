const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}! `

console.log(concatenacao,template) 

//expressoes
console.log(`1 + 1 = ${1 + 1 }`)


// Primeira forma
// const up = s => {
//     return s.toUpperCase()
// }

//Segunda Forma
const up = s => s.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`)