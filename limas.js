const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Limas         ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let panjang = Number(prompt("panjang : "))
let lebar = Number(prompt("lebar : "))
let tinggi = Number(prompt("tinggi : "))

let volume = (1/3) * panjang * lebar * tinggi
let luasPermukaan = panjang * lebar + 2 * (panjang * Math.sqrt((lebar/2)**2 + tinggi**2) + lebar * Math.sqrt((panjang/2)**2 + tinggi**2))

console.log("------------------------------------------");
console.log(
`Volume Limas     : ${volume} cm3
Luas Permukaan Limas : ${luasPermukaan} cm2`
);
console.log("==========================================");