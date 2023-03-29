// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.Chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa


const nomi =[
    'simona',
    'marta',
    'mirco',
    'antonio'
]

let controllore = false;

while(!controllore){
    let nome = prompt('Inserisci il tuo nome')

    // cerco nell'array
    // istruzione per cambio condizione
    if(nomi.includes(nome)){
        console.log('sei invitato')
        // fine ciclo while perchè la condizione risulterà falsa
        controllore = nomi.includes(nome)
    }else{
        alert('Non sei invitato')
    }
}




