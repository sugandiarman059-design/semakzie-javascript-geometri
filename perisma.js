const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Perisma         ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let panjang = Number(prompt("panjang : "))
let lebar = Number(prompt("lebar : "))
let tinggi = Number(prompt("tinggi : "))

let volume = panjang * lebar * tinggi
let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

console.log("------------------------------------------");
console.log(
`Volume Perisma     : ${volume} cm3
Luas Permukaan Perisma : ${luasPermukaan} cm2`
);
console.log("==========================================");