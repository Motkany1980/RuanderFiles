console.log("Start");

function RandomEgesz(alsoHatar, felsoHatar) {
    let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    console.log("- Randomszám");
    console.log(generaltSzam);
    document.write("<b>" + "- Random szám :" + "</b>");
    document.write(generaltSzam + "<br>");
    return generaltSzam;
}

function PrimGenerator() {
    console.log("start2")
    let megvan = false;
    let generaltSzam = 0;
    while (megvan == false) {
        generaltSzam = RandomEgesz(1, 100);
        document.write("! "+generaltSzam+"<br>");
        let oszto = 0;
        // 1-100-ig mindíg lefut és, ha két osztója van csak 1 és önmaga akkor prim
        for (let i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
                console.log("osztók száma: " + oszto + "/ osztó: " + i);
                document.write("osztók száma: " + oszto + "/ osztó: " + i + "<br>");
            }

        }
        // 1-100-ig 
        if (oszto == 2) {
            // mert 1-al és önmagával oszthaó csak
            megvan = true
        } else {}
    }
    return generaltSzam;
}

console.log("A generált primszám :" + PrimGenerator());
document.write("<br><b>A generált primszám :" + PrimGenerator() + "</b><br>");

