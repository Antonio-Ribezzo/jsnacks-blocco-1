// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array


let array =[]

for(let i = 0; i < 6; i++){
    const num = parseInt(prompt("inserisci un numero"));
    if(num % 2 == 1){
        array.push(num)
    }
}

console.log(`Il mio array è ${array}`)




