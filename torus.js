const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Torus     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let R = Number(prompt("Masukkan jari-jari lingkaran besar (R): "));
let r = Number(prompt("Masukkan jari-jari lingkaran kecil (r): "));

let luas = 4 * Math.PI * Math.PI * R * r;
let volume = 2 * Math.PI * Math.PI * R * r * r;

console.log(`Luas Torus: ${luas}`);
console.log(`Volume Torus: ${volume}`);