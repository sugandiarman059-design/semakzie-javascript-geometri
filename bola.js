const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Bola          ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let jariJari = Number(prompt("jari-jari : "))

let volume = 4/3 * 3.14 * jariJari ** 3
let luasPermukaan = 4 * 3.14 * jariJari ** 2

console.log("------------------------------------------");
console.log(
`Volume Bola     : ${volume} cm3
Luas Permukaan Bola : ${luasPermukaan} cm2`
);
console.log("==========================================");