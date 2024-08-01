/* 
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un 
form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

/* 
1-Recupero gli elementi di mio interesse da DOM
2-creo una costante prezzo/km.
3-raccolgo i dati dell'utente
4-calcolo il prezzo base del biglietto
5-calcolo lo sconto
6-stampo in console il risultato
7-aggiungiamo un form
8-recuperiamo i nuovi dati dal DOM
9-aggiungiamo degli eventi al bottone
10-recuperiamo i valori dell'input
11-elaboriamo i valori da rimandare al DOM
12-stampiamo in pagina
*/

//1-Recupero gli elementi di mio interesse da DOM

const ageField = document.getElementById('age');
const kmField = document.getElementById('distance');
const genButton = document.getElementById('generate');
console.log('ageField', ageField);
console.log('kmField', kmField);
console.log('genButton',genButton);

//2-creo una costante prezzo/km.

const priceByKm = 0.21;
console.log('priceByKm', priceByKm);

//3-raccolgo i dati dell'utente



