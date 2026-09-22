const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Trapesium     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let sisi1 = Number(prompt("sisi 1 : "))
let sisi2 = Number(prompt("sisi 2 : "))
let tinggi = Number(prompt("tinggi : "))

let luas = 0.5 * (sisi1 + sisi2) * tinggi
let keliling = sisi1 + sisi2 + (Math.sqrt(Math.pow((sisi2 - sisi1) / 2, 2) + Math.pow(tinggi, 2))) * 2

console.log("------------------------------------------");
console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
);
console.log("==========================================");