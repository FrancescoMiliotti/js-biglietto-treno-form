


const prezzoKm = 0.21;
let costoBiglietto = null;
let offerta = null;





document.getElementById("button").addEventListener("click", function () {

let inputKm = document.getElementById("km").value;
console.log("km da percorrere ", inputKm);

let inputEtaPasseggero = document.getElementById("eta").value;
console.log("Età passeggero ", inputEtaPasseggero);

let name = document.getElementById("name").value;
console.log("Nome ", name);

let surname = document.getElementById("surname").value;
console.log("Cognome ", surname);



if (inputEtaPasseggero < 18) {
    costoBiglietto = ((inputKm * prezzoKm) * (100 - 20) / 100);
    offerta = "Under 18"
    

} else if (inputEtaPasseggero > 65) {
    costoBiglietto = ((inputKm* prezzoKm) * (100 - 40) / 100);
    offerta = "Over 65"

} else {
    costoBiglietto = inputKm* prezzoKm;
    offerta = "Standard"
}

console.log("Costo Biglietto", costoBiglietto.toFixed(2));
document.getElementById("prezzoFinale").innerText = `Costo Biglietto € : ${costoBiglietto.toFixed(2)}`;
document.getElementById("trip").innerText = `Distanza Km ${inputKm} - Offerta : ${offerta}`;
document.getElementById("utente").innerText = `Passeggero : ${name}  ${surname}`;

});



