const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Segitiga     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let alas = Number(prompt("alas : "))
let tinggi = Number(prompt("tinggi : "))
let sisi1 = Number(prompt("sisi 1 : "))
let sisi2 = Number(prompt("sisi 2 : "))

let luas = 0.5 * alas * tinggi
let keliling = alas + sisi1 + sisi2

console.log("------------------------------------------");
console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
);
console.log("==========================================");