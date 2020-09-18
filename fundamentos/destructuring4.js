const rand = ( [min = 0, max = 1000] ) =>
    (min > max) ? rand([max, min]) : Math.floor(Math.random() * (max - min) + min)

function rand2( [min = 0, max = 1000] ){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}
 
console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand2()) undefined