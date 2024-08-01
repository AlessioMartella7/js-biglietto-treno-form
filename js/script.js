
/* 
1-Recupero gli elementi di mio interesse da DOM
2-creo una costante prezzo/km.
3-aggiungiamo degli eventi al bottone
4-preparo lo sconto
5-calcolo il prezzo base del biglietto
6-calcolo lo sconto
7-stampo in console il risultato
8-recuperiamo i nuovi dati dal DOM
9-elaboriamo i valori da rimandare al DOM e stampiamo
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


//3 aggiungo degli eventi al bottone

genButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('cliccato')
    const ageValue = ageField.value;
    const kmValue = kmField.value;
    
    //4preparo lo sconto
    let discount = null;
    
    //5-calcolo il prezzo base del biglietto
    const km = kmField.value;
    console.log('km',km);
    
    const basePrice = (km * priceByKm);
    let finalPrice = basePrice;
    console.log('basePrice',basePrice);
    
    //6-calcolo lo sconto
    if (ageValue > 65) discount = 40;
    else if (ageValue < 18) discount = 20;
    
    const discountAmount = (finalPrice / 100) * discount;
    console.log ('discountAmount',discountAmount);
    
    finalPrice -= discountAmount;
    
    //7-stampo in console il risultato
    console.log(ageValue);
    console.log(kmValue);
    console.log('finalPrice', finalPrice.toFixed(2));
    

    //8-recuperiamo i nuovi dati dal DOM
    const ageElement = document.getElementById('printed-age');
    const kmElement = document.getElementById('printed-km');
    const priceElement = document.getElementById('printed-price');
    console.log('ageElement',ageElement);
    console.log('kmElement',kmElement);
    console.log('priceElement',priceElement);

    //9- Elaboriamo i valori da rimandare al DOM e stampiano

    if(ageValue && kmValue) {
    ageElement.innerText += ` ${ageValue}`;
    kmElement.innerText += ` ${kmValue} Km` ;
    priceElement.innerText += ` ${finalPrice.toFixed(2)} €`;
    ageField.value ='';
    kmField.value = '';
    }
})








