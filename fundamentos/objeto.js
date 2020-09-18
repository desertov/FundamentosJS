// Objeto em JS eh uma colecao key->value

const prod1 = {} //instancia de um object por chaves
prod1.nome = 'Celular Ultra Mega' // atributo nome foi criado dinamicamente 
prod1.preco = 4990.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço


console.log(prod1)


const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90,
} 

//JSON é uma forma textual para comunicação entre sistemas, não é um objeto. Exemplo abaixo:
//{ "nome": "Camisa Polo","preco": 79.90}

console.log(prod2)