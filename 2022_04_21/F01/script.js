"use strict";
// tsc --watch
console.log("Start 04.21.");
// Visszatérési érték és paraméter nélküli eljárás
function IloveTypeScript() {
    document.write("Gépelek valamit");
}
IloveTypeScript();
// Visszatérési érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    let kerulet = 4 * a;
    let terulet = a * a;
    document.write(`Kerület és terület`);
    document.write(`<br> - Kerület ${kerulet}`);
    document.write(`<br> - Terulet ${terulet}`);
}
NegyzetKeruletTeruletEljaras(2);
// Visszatérési értékes és paraméter nélküli függvény
function RandomGeneraloFuggveny() {
    return Math.round(Math.random() * 100);
}
document.write(`<br> - Random number ${RandomGeneraloFuggveny()}`);
// Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return a * 4;
}
document.write(`<br> - Kerület ${NegyzetKeruletFuggveny(3)}`);
// Téglalap terület
function TeglalapKeruletTeruletEljaras(a, b) {
    let kerulet = 2 * (a + b);
    let terulet = a * b;
    document.write(`Kerület és terület`);
    document.write(`<br> - Téglalap Kerület ${kerulet}`);
    document.write(`<br> - Téglalap Terulet ${terulet}`);
}
TeglalapKeruletTeruletEljaras(2, 3);
// Páros e a megadott szám
let param = 5;
function ParosE(paros) {
    if (paros % 2 == 0) {
        document.write(`<br> - A szám páros : <b>${paros}</b>`);
    }
    else {
        document.write(`<br> - A szám páratlan : <b>${paros}</b> `);
    }
}
ParosE(param);
