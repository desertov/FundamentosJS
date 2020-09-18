let valor //nao inicializada
console.log(valor)
// console.log(valor2)


valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) Erro! Método pertencente ao Object

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
// delete produto.preco
produto.preco = undefined //evitar usar undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)