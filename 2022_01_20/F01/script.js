console.log("Start");

function TombGenerator(meret, hatar1, hatar2) {
    let generaltTomb = [];
    for (let i = 0; i < meret.length; i++) {

        generaltTomb.push(RandomEgesz(Kisebb(hatar1, hatar2), Nagyobb(hatar1, hatar2)));
    }
    return generaltTomb;
}
let ujTomb=TombGenerator(5,1,20);
console.log(ujTomb);

function Kisebb(szam1, szam2) {
    if (szam1 < szam2) {
        return szam1;
    } else {
        return szam2;
    }
}

function Nagyobb(szam1, szam2) {
    if (szam1 < szam2) {
        return szam1;
    } else {
        return szam2;
    }
}

function RandomEgesz(alsoHatar, felsoHatar) {
    let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return generaltSzam
}