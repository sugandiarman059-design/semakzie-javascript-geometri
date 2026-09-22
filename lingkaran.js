const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Lingkaran     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let jariJari = Number(prompt("jari-jari : "))
let luas = 3.14 * jariJari * jariJari
let keliling = 2 * 3.14 * jariJari

console.log("------------------------------------------");
console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
);
console.log("==========================================");