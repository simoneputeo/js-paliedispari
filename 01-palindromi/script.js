/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// Input della parola e rimozione eventuali caratteri in maiuscolo
// (che romperebbero la funzione)
let word = prompt("Inserisci una parola").toLowerCase

//Applicazione funzione isPalindrome alla variabile Word
function isPalindrome(word) {

    // Ciclo for che conta valori di indice fino a meta' parola
    for (let i = 0; i < Math.floor(word.length / 2); i++) {

        // If che verifica la non corrispondenza
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    // Se invece corrispondono tutti
    return true;
}


// Output del valore booleano
if (isPalindrome(word)) {
    // Messaggio in caso di true
    console.log("La parola che hai inserito e' palindroma");
} else {
    // Messaggio in caso di false
    console.log("La parola che hai inserito non e' palindroma");
}