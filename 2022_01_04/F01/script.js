let szam1 = Math.round(Math.random() * 100);
let szam2 = Math.round(Math.random() * 100);
let oszto = 0
let lnko;

console.log("szám 1: ", szam1, "szám 2: ", szam2);

for (i = 1; i <= szam1; i++) {
    if (szam1 % i == 0) {
        oszto++;
    }
}
if (oszto == 2) {
    document.write(szam1," prim");
} else {
    document.write(szam1, " nem prim");
}