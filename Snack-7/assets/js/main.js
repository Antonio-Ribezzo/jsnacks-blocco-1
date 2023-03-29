// Stampa le potenze di due fino a mille. Questo snack cela un trabocchetto: 1000 non è una potenza di 2 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla perchè altrimenti il controllo viene fatto dopo e si sfora.

let limite = 1000;
let n = 2;
let potenza = 2;

while ((n *= potenza) < 1000){
    n *= potenza
    console.log(n)
}




