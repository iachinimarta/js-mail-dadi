const player = Math.floor(Math.random() * 6) + 1;
alert("Il numero che hai scelto è: " + player);

const computer = Math.floor(Math.random() * 6) + 1;
alert("Il numero del tuo avversario è: " + computer);

if (player > computer) {
    alert("Hai vinto!");
} else if (player < computer) {
    alert("Ritenta!");
} else if (player == computer) {
    alert("Pareggio!");
}