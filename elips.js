const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Elips     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let a = Number(prompt("Masukkan panjang sumbu mayor (a): "));
let b = Number(prompt("Masukkan panjang sumbu minor (b): "));
let luas = Math.PI * a * b;
let keliling = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));

console.log(`Luas Elips: ${luas}`);
console.log(`Keliling Elips: ${keliling}`);