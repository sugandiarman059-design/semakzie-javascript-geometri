const prompt = require("prompt-sync")({ sigint: true });
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");
console.log("      Selamat Datang di kalkulator Heksagon     ");
console.log("^==*==^==*==^==*==^==*==^==*==^==*==^==*==^==*==^");

    let sisi = Number(prompt("Panjang sisi: "));
        let luas = (3 * Math.sqrt(3) * Math.pow(sisi, 2)) / 2;
            let keliling = 6 * sisi;

    console.log(`Luas Heksagon: ${luas}`);
            console.log(`Keliling Heksagon: ${keliling}`);