const prompt = require("prompt-sync")({ sigint: true })
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^")
console.log("      Selamat Datang di kalkulator Balok         ")
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^")

let p = Number(promgutpt("panjang balok: "))
let l = Number(prompt("lebar balok: "))
let t = Number(prompt("tinggi balok: "))

let v = p * l * t;
let lp = 2 * (p * l + p * t + l * t);

console.log("------------------------------------------")
console.log(`volume Balok: ${v} cm³`);
console.log(`Luas Permukaan Balok: ${lp} cm²`);
console.log("==========================================")