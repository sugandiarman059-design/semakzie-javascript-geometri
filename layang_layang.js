const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("    Selamat Datang di kalkulator Layang-Layang   ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let diagonal1 = Number(prompt("diagonal 1 : "))
let diagonal2 = Number(prompt("diagonal 2 : "))
let sisi1 = Number(prompt("sisi 1 : "))
let sisi2 = Number(prompt("sisi 2 : "))

let luas = 0.5 * diagonal1 * diagonal2
let keliling = 2 * (sisi1 + sisi2)

console.log("------------------------------------------");
console.log(`Luas Layang-Layang: ${luas} cm²`)
console.log(`Keliling Layang-Layang: ${keliling} cm`)
console.log("==========================================");