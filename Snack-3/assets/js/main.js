// Il software deve chiedere per 10 volte al''utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti

let sum = 0;

for(let i = 0; i < 10; i++){
    const num = parseInt(prompt("inserisci un numero"));
    sum += num
}

console.log(`La somma dei numeri è ${sum}`)




