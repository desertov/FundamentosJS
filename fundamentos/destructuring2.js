const [a] = [10]
console.log(a)

//
//

// const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

array2 = [10, 7, 9, 8]
const [n1, , n3, , n5, n6 = 0] = array2

console.log(n1, n3, n5 ,n6)


const [, [, nota]] = [[1, 8 ,8], [9, 6, 8]]
console.log(nota)