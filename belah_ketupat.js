const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("     Selamat Datang di kalkulator Belah Ketupat  ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let diagonal1 = Number(prompt("Masukkan panjang diagonal 1: "));
let diagonal2 = Number(prompt("Masukkan panjang diagonal 2: "));
let sisi = Number(prompt("Masukkan panjang sisi: "));

let luas = 0.5 * diagonal1 * diagonal2;
let keliling = 4 * sisi;

console.log("------------------------------------------");
console.log(`Luas Belah Ketupat: ${luas} cm²`);
console.log(`Keliling Belah Ketupat: ${keliling} cm`);
console.log("==========================================");