/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// Comunico all'utente che stiamo giocando a pari e dispari
alert("Giochiamo a pari e dispari")

// L'utente sceglie se pari o dispari
const userPrevision = prompt("Scegli pari o dispari", "pari").toLowerCase()

// L'utente comunica quante dita della sua mano vuole tirare
const userNumber = parseInt(prompt("Inserire un numero da 1 a 5"))

// Il computer genera in modo casuale un numero tra 1 e 5
const pcNumber = Math.floor(Math.random() * 5) + 1

// Verifico che gli input siano corretti e parte la logica
if ((userPrevision === "pari" || userPrevision === "dispari") && userNumber !== isNaN && userNumber >= 1 && userNumber <= 5) {
    const totalNumber = userNumber + pcNumber

    if (
        (userPrevision === "pari" && totalNumber % 2 === 0) ||
        (userPrevision === "dispari" && totalNumber % 2 === 1)

    ) { msgWin = "Hai vinto!!" }
    else { msgWin = "Hai perso!!" }

    alert(`${msgWin}
        La tua scelta: ${userPrevision}
        Il tuo numero: ${userNumber}
        Il numero del PC: ${pcNumber}
        Totale: ${totalNumber} (${totalNumber % 2 === 0 ? 'pari' : 'dispari'})`);

} else {
    alert("Dati non validi! Ricarica la pagina per riprovare.");
}