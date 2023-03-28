// L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const num1 = prompt("Inserisci il primo numero");
const num2 = prompt("Inserisci il secondo numero");

if(num1 > num2){
    console.log(`Il numero maggiore è ${num1}`)
} else if(num2 > num1){
    console.log(`Il numero maggiore è ${num2}`)
} else{
    console.log(`I due numeri sono uguali`)
}
