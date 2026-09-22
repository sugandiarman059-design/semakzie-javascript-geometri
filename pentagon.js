const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Pentagon     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let sisi = Number(prompt("Panjang sisi: "));
let luas = (5 * Math.pow(sisi, 2)) / (4 * Math.tan(Math.PI / 5));
let keliling = 5 * sisi;

console.log("------------------------------------------");
console.log(`Luas Pentagon: ${luas} cm²`);
console.log(`Keliling Pentagon: ${keliling} cm`);
console.log("==========================================");