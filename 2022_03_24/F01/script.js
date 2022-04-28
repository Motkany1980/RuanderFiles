// Math.round(Math.random()*100);
mertek.addEventListener('change', ertekValtozas);

function ertekValtozas() {
    let elteresMerteke = document.querySelector("#mertek").value;
    document.querySelector("#ertek").innerHTML = elteresMerteke;


    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    document.querySelector("#red").innerHTML = r;
    document.querySelector("#green").innerHTML = g;
    document.querySelector("#blue").innerHTML = b;

    let szin = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = szin;

}


function beAllito(eredetiErtek, mertek) {
    let valami;
    if (eredetiErtek+mertek>255) {
        valami = 255
    } else {
        valami = Number(eredetiErtek)+Number(mertek)
    }
    return valami;
}