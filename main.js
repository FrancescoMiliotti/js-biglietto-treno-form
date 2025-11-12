

// document.getElementById("testoUtente").addEventListener("input", function() {
// 	let x = document.getElementById("testoUtente").value.trim();
// 	document.getElementById("result").innerText = x;
// })


const prezzoKm = 0.21
let costoBiglietto = null;


document.getElementById("button").addEventListener("click", function () {
let inputKm = document.getElementById("km").value;
console.log("km da percorrere ", inputKm);
let inputEtaPasseggero = document.getElementById("eta").value;
console.log("Età passeggero ", inputEtaPasseggero);



if (inputEtaPasseggero < 18) {
    costoBiglietto = ((inputKm * prezzoKm) * (100 - 20) / 100);
    

} else if (inputEtaPasseggero > 65) {
    costoBiglietto = ((inputKm* prezzoKm) * (100 - 40) / 100);

} else {
    costoBiglietto = inputKm* prezzoKm;
}

console.log("Costo Biglietto", costoBiglietto.toFixed(2));
document.getElementById("prezzoFinale").innerText = costoBiglietto.toFixed(2);


});



//let inputKm = null;
//let inputEtaPasseggero = null;





/*const Km = parseInt(inputKm);
const etaPasseggero = parseInt(inputEtaPasseggero);

if (etaPasseggero < 18) {
    costoBiglietto = ((Km * prezzoKm) * (100 - 20) / 100);
    

} else if (etaPasseggero > 65) {
    costoBiglietto = ((Km * prezzoKm) * (100 - 40) / 100);

} else {
    costoBiglietto = Km * prezzoKm;
}


console.log("km", inputKm, "eta", inputEtaPasseggero);
console.log("Costo Biglietto", costoBiglietto.toFixed(2));


/*document.getElementById("km").innerHTML = Km;
document.getElementById("eta").innerHTML = etaPasseggero;
document.getElementById("prezzoFinale").innerHTML = costoBiglietto.toFixed(2);*/