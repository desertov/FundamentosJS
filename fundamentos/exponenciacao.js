/*
Devido ao ES 7, não precisamos mais 
fazer instancia da classe Math para
operação de exponenciação
*/

let exp = Math.pow(2, 3)

console.log(exp)

let exp2 = 2 ** 3 //Devido ao ES7 podemos usar este operador

console.log(exp2)

let base = 2 

base **= 3 // Eleva o valor de base à terceira potência

console.log(base)

let exp3 = 2 ** -3 // Com expoente negativo

console.log(exp3)// 2 elevado a -3  igual  a 1/8 que é igual a 0.125