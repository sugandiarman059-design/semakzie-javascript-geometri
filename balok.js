const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Balok         ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let panjang = Number(prompt("Panjang balok: "));
let lebar = Number(prompt("Lebar balok: "));
let tinggi = Number(prompt("Tinggi balok: "));

let volume = panjang * lebar * tinggi;
let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

console.log("------------------------------------------");
console.log(`Volume Balok: ${volume} cm³`);
console.log(`Luas Permukaan Balok: ${luasPermukaan} cm²`);
console.log("==========================================");