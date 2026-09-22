const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Kerucut        ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let jariJari = Number(prompt("jari-jari : "))
let tinggi = Number(prompt("tinggi : "))

let volume = 1/3 * 3.14 * jariJari * jariJari * tinggi
let luasPermukaan = 3.14 * jariJari * (jariJari + Math.sqrt(jariJari**2 + tinggi**2))

console.log("------------------------------------------");
console.log(
`Volume Kerucut     : ${volume} cm3
Luas Permukaan Kerucut : ${luasPermukaan} cm2`
);
console.log("==========================================");