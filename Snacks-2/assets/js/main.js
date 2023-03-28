// L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt("inserisci la prima parola")
let parola2 = prompt("inserisci la seconda parola")

if (parola1.length > parola2.length){
    console.log(`${parola1} è più lunga di ${parola2}`)
} else if (parola2.length > parola1.length){
    console.log(`${parola2} è più lunga di ${parola1}`)
} else{
    console.log(`${parola1} e ${parola2} hanno la stessa lunghezza`)
}

