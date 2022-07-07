// const email0 = "nome@email.it";
// const email1 = "nome1@email.it";
// const email2 = "nome2@email.it"; ------ Eventualmente non necessarie

const list = ["nome@email.it", "nome1@email.it", "nome2@email.it"];
console.log(list);

let addEmail = prompt("Inserisci la tua email..");

// impostata variabile booleana
let nuovoUtentePresente = false; //imposto che a cose normali l'email inserita dall'utente non è presente in list

for (let i = 0; i < list.length; i++) {
    // Soluzione corretta dopo review
    console.log(list[i]);

    if (addEmail == list[i]) { //controllo la presenza della mail dell utente in list
        nuovoUtentePresente = true; //annullo la variabile impostata fuori dal for
    }


    
    // Mia soluzione sbagliata
    // i = addEmail; ----- Sbagliato
    // if ((i == email0) || (i == email1) || (i == email2)) { ------- "i == emailN" è sbagliato perchè se si inseriscono nuove email si devono poi aggiungere ogni volta alla IF quindi meglio usare list[i]. 
    //     alert("Accesso consentito!");
    // } else {
    //     alert("Accesso negato!");
    // }

}

// Soluzione corretta dopo review
if ( nuovoUtentePresente == true) { //se la variabile impostata prima del for viene annullata allora.. altrimenti..
    alert("Accesso consentito!");
} else {                
    alert("Accesso negato!");
}

