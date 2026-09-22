const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Kubus         ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

let sisi = Number(prompt("Panjang sisi kubus: "));
let luas = 6 * Math.pow(sisi, 2);
let volume = Math.pow(sisi, 3);

console.log("------------------------------------------");
console.log(`Luas Permukaan Kubus: ${luas} cm²`);
console.log(`Volume Kubus: ${volume} cm³`);
console.log("==========================================");