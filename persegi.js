const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Persegi     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
let sisi = Number(prompt("sisi : "))
let luas = sisi * sisi
let keliling = 4 * sisi
console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
)