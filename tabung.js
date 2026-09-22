const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Tabung        ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let jariJari = Number(prompt("jari-jari : "))
let tinggi = Number(prompt("tinggi : "))

let volume = 3.14 * jariJari * jariJari * tinggi
let luasPermukaan = 2 * 3.14 * jariJari * (jariJari + tinggi)

console.log("------------------------------------------");
console.log(
`Volume Tabung     : ${volume} cm3
Luas Permukaan Tabung : ${luasPermukaan} cm2`
);
console.log("==========================================");