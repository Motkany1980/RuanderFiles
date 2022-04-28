function iLike() {
    document.write("Szeretem a programozást <br><br>");
}
iLike();

function ParosParatlan() {
    let generaltSzam = Math.round(Math.random() * 100);
    let generaltSzam2 = Math.round(Math.random());
    let generaltSzam3 = Math.random();
    console.log(generaltSzam, generaltSzam2, generaltSzam3);

    document.write(`<b>ParosParatlan () függvény futtatása :</b> <hr> - A generált szám ${generaltSzam} <br>`);

    if (generaltSzam % 2 == 0) {
        document.write(`- A generált szám ${generaltSzam} páros`);
    } else {
        document.write(`- A generált szám ${generaltSzam} páratlan`);

    }
};
ParosParatlan();

document.write(`<br><br><b>A hét napjai feladat</b> <hr>`);

function hetNapjai() {
    let generaltSzam4 = Math.round((Math.random() * 6) + 1);
    console.log(generaltSzam4);
    if (generaltSzam4 == 1) {
        document.write(`- Hétfő`)
    } else if (generaltSzam4 == 2) {
        document.write(`- Kedd`)
    } else if (generaltSzam4 == 3) {
        document.write(`- Szerda`)
    } else if (generaltSzam4 == 4) {
        document.write(`- Csütörtök`)
    } else if (generaltSzam4 == 5) {
        document.write(`- Péntek`)
    } else if (generaltSzam4 == 6) {
        document.write(`- Szombat`)
    } else {
        document.write(`- Vasárnap`)
    }

}

hetNapjai();

document.write(`<br><br><b>A hét napjai switch feladat</b> <hr>`);

function hetNapjaiSwitch() {
    let generaltSzam5 = Math.round((Math.random() * 6) + 1);
    document.write(`- Generáltszám switch :  ${generaltSzam5} <br>`);
    switch (generaltSzam5) {
        case 1: {
            document.write(`- Hétfő`);
            break;
        }
        case 2: {
            document.write(`- Kedd`);
            break;
        }
        case 3: {
            document.write(`- Szerda`);
            break;
        }
        case 4: {
            document.write(`- Csütörtök`);
            break;
        }
        case 5: {
            document.write(`- Péntek`);
            break;
        }
        case 6: {
            document.write(`- Szombat`);
            break;
        }
        case 7: {
            document.write(`Vasárnap`);
            break;
        }
    }
}

hetNapjaiSwitch();

document.write(`<br><br><b> Paraméteres függvények</b> <br><hr>`)

function osszeado(szam1, szam2) {
    let osszeg = szam1 + szam2;
    document.write(`A két szám <b>${szam1}</b> és <b>${szam2}</b>. <br>Az összegük pedig :<b> ${osszeg}</b> .`);

}

osszeado(2, 3);

document.write(`<br><br><b> Köszönő program :</b> <br><hr>`);

function koszonto(nev) {
    document.write(`Üdvözöllek <b>${nev}</b>`);
};

koszonto(`Keszericze István`);

document.write(`<br><br><b> Téglalap kerület/ terület :</b> <br><hr>`);

function keruletTerulet(a, b) {
    document.write(`A téglalap kerülete ${2*(a+b)}, A területe ${a*b}`)
}

keruletTerulet(2, 6);

document.write(`<br><br><b> Visszatérési érték:</b> <br><hr>`);

function osszeg2(szamEgy, szamKetto) {
    let osszeg3 = szamEgy + szamKetto
    document.write(osszeg3);
    return osszeg3;
}

osszeg2(1, 2);

document.write(`<br><br><b> Random egész szám:</b> <br><hr>`);

function randomEgesz(alsoHatar, felsoHatar) {
    let generaltSzam56 = Math.round((Math.random() * (felsoHatar - alsoHatar))) + alsoHatar;
    return generaltSzam56;
}

function random110() {
    let randomval = Math.round(Math.random() * 100);
    let randomval2 = Math.round(Math.random() * 100);

    let alsoHatar;
    let felsoHatar;
    // @ts-ignore
    console.log(`Első véletlen elem ${randomval}, második véletlen elem ${randomval2}`);
    if (randomval > randomval2) {
        alsoHatar = randomval2;
        felsoHatar = randomval
    } else {
        alsoHatar = randomval;
        felsoHatar = randomval2;

    }
    console.log(`Alsó Határ ${alsoHatar} , Felső határ ${felsoHatar}`)
    return {
        alsoHatar,
        felsoHatar
    };
}

let szam = randomEgesz(random110().alsoHatar, random110().felsoHatar);
document.write(szam);

document.write(`<br><br><b> Prim-e a szám:</b> <br><hr>`);

function primE(viszgalandoSzam) {
    let oszto = 0;
    for (let i = 0; i < viszgalandoSzam; i++) {
        if (viszgalandoSzam % i == 0) {
            oszto++;
        }

    }
    if(oszto==2){
        document.write(`A viszgált szám (<b>${viszgalandoSzam}</b> primszám)`)
    }else{
        document.write(`A viszgált szám (<b>${viszgalandoSzam}</b> nem primszám)`)

    }
    return oszto;
}

function randomSokadik(){
    let szamSokadik=Math.round(Math.random() * 100);
    document.write(szamSokadik+"<br>");
    return szamSokadik;
}
console.log(primE(randomSokadik()));
