const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("   Selamat Datang di kalkulator Persegi panjang  ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let panjang = Number(prompt("panjang : "));
let lebar   = Number(prompt("lebar   : "));
let luas    = panjang * lebar;
let keliling = 2 * (panjang + lebar);

console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
);