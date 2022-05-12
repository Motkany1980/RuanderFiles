"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagatartasSzorgalomEredmeny = exports.eredmeny = exports.MagatartasSzorgalom = void 0;
class MagatartasSzorgalom {
    constructor(nev, csoport, tipus) {
        this.nev = "";
        this.nev = nev;
        this.csoport = csoport;
        this.tipus = tipus;
    }
}
exports.MagatartasSzorgalom = MagatartasSzorgalom;
exports.eredmeny = new MagatartasSzorgalom("Minta Márton", 8, true);
function MagatartasSzorgalomEredmeny() {
    console.log(`Webprogramozó ${exports.eredmeny.nev} [Team0${exports.eredmeny.csoport}] - Junior Frontend${exports.eredmeny.tipus}`);
}
exports.MagatartasSzorgalomEredmeny = MagatartasSzorgalomEredmeny;
