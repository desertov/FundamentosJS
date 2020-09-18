const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(4)) //Tabela Unicode
console.log(escola.indexOf('r'))

console.log(escola.substring(1)) // [1, infinity) Leitura a  partir do index 1 até o fim
console.log(escola.substring(0,3)) //[0, 3) Leitura a partir do index 0 ate 3 sem incluir o index 3

console.log('Escola '.concat(escola.concat("!"))) // literal e variavel do tipo string usando o metodo con
console.log(escola.replace(3,'e')) // o numero 3 pode ser substituido por regEx

console.log('Ana, Maria, Pedro')
console.log(escola.replace(/\d/,'e')) //Com regEx

console.log('Escola ' + (escola.concat("!")))
console.log('Escola ' + escola + "!")

console.log('Ana, Maria, Pedro'.split(','))