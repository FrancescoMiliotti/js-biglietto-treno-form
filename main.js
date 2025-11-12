

// document.getElementById("testoUtente").addEventListener("input", function() {
// 	let x = document.getElementById("testoUtente").value.trim();
// 	document.getElementById("result").innerText = x;
// })


// document.getElementById("inviaDati").addEventListener("click", function () {
// 	let x = document.getElementById("testoUtente").value.trim();
// 	console.log(x);
// });


const prezzoKm = 0.21

const inputKm = prompt("Quanti Km vuoi Percorrere oggi?");
const inputEtaPasseggero = prompt("Età Passeggero?");
let costoBiglietto = null;

console.log("km", inputKm, "eta", inputEtaPasseggero);


const Km = parseInt(inputKm);
const etaPasseggero = parseInt(inputEtaPasseggero);

if (etaPasseggero < 18) {
    costoBiglietto = ((Km * prezzoKm) * (100 - 20) / 100);
    

} else if (etaPasseggero > 65) {
    costoBiglietto = ((Km * prezzoKm) * (100 - 40) / 100);

} else {
    costoBiglietto = Km * prezzoKm;
}



console.log("Costo Biglietto", costoBiglietto.toFixed(2));


document.getElementById("km").innerHTML = Km;
document.getElementById("eta").innerHTML = etaPasseggero;
document.getElementById("prezzoFinale").innerHTML = costoBiglietto.toFixed(2);