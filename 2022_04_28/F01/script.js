"use strict";
// Első feladat
class MagatartasSzorgalom {
    constructor(nev, csoport, tipus) {
        this.nev = "";
        this.nev = nev;
        this.csoport = csoport;
        this.tipus = tipus;
    }
}
let eredmeny = new MagatartasSzorgalom("Minta Márton", 8, true);
function MagatartasSzorgalomEredmeny() {
    console.log(eredmeny.nev);
    console.log(eredmeny.csoport);
    console.log(eredmeny.tipus);
    const elem = document.getElementById("magatartasSzorgalom");
    console.log(`Webprogramozó ${eredmeny.nev} [Team0${eredmeny.csoport}] - Junior Frontend${eredmeny.tipus}`);
    const output = document.getElementById('magatartasSzorgalom');
    document.write(`<br><b>Első feladat</b><br>Webprogramozó ${eredmeny.nev} [Team0${eredmeny.csoport}] - Junior Frontend${eredmeny.tipus}<hr><br>`);
}
MagatartasSzorgalomEredmeny();
// Második feladat
class Osztalyzat {
    constructor(jegy) {
        this.szorgalom = ['Példás', 'Jó', 'Változó', 'Hanyag'];
        this.magatartas = ['Példás', 'Jó', 'Változó', 'Rossz'];
        this.jegy = jegy;
    }
}
;
let Katika = new Osztalyzat(3);
if (Katika.jegy < 2) {
    document.write(`<b> Katika szorgalma :</b> <br> ${Katika.szorgalom[3]}, a magatartása pedig: ${Katika.magatartas[3]} <hr><br>`);
}
else {
    document.write(`<b> Második feladat :</b> <br> Katika szorgalma: ${Katika.szorgalom[0]}, a magatartása pedig: ${Katika.magatartas[0]} <hr><br>`);
}
// Harmadik feladat
