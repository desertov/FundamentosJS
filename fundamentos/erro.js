function tratarErroeLancar(e){
    //Tratamento de exceção

    
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + `!!!`)
    }catch(e){
        tratarErroeLancar(e)
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
