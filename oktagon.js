const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Oktagon     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let sisi = Number(prompt("Panjang sisi: "));
let luas = 2 * (1 + Math.sqrt(2)) * Math.pow(sisi, 2);
let keliling = 8 * sisi;

console.log(`Luas Oktagon: ${luas}`);
console.log(`Keliling Oktagon: ${keliling}`);