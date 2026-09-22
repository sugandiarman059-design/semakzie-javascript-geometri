const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("     Selamat Datang di kalkulator Jajar Genjang  ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let alas = Number(prompt("alas : "))
let tinggi = Number(prompt("tinggi : "))
let sisiMiring = Number(prompt("sisi miring : "))

let luas = alas * tinggi
let keliling = 2 * (alas + sisiMiring)

console.log("------------------------------------------");
console.log(
`luas     : ${luas} cm2
keliling : ${keliling} cm`
);
console.log("==========================================");