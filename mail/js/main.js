const email0 = "nome@email.it";
const email1 = "nome1@email.it";
const email2 = "nome2@email.it";

const list = [email0, email1, email2];
console.log(list);

let addEmail = prompt("Inserisci la tua email..");

for (let i = 0; i < list.length; i++) {
    i = addEmail;
    console.log(i);
    console.log(typeof i);

    if ((i == email0) || (i == email1) || (i == email2)) {
        alert("Accesso consentito!");
    } else {
        alert("Accesso negato!");
    }

    // VERSIONE ESTESA:
    
    //  if (i == email0) {
    //     alert("Accesso consentito!");
    // } else if (i == email1) {
    //     alert("Accesso consentito!");
    // } else if (i == email2) {
    //     alert("Accesso consentito!");
    // } else {
    //     alert("Accesso negato!");
    // }
}

