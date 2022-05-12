redValue.addEventListener('change', redfunction);

function redfunction() {
    let elteresMertekerr = document.querySelector("#redValue").value;
    document.querySelector("#redSet").innerHTML = elteresMertekerr;

    let elteresMertekerg = document.querySelector("#greenValue").value;
    document.querySelector("#greenSet").innerHTML = elteresMertekerg;

    let elteresMertekebb = document.querySelector("#blueValue").value;
    document.querySelector("#blueSet").innerHTML = elteresMertekebb;

    let szin = "rgb(" + elteresMertekerr + "," + elteresMertekerg + "," + elteresMertekebb + ")";
    document.getElementById("RGBkodMegjelenito").innerHTML = szin;
    document.body.style.backgroundColor = szin;

}

greenValue.addEventListener('change', greenfunction);

function greenfunction() {
    let elteresMertekerr = document.querySelector("#redValue").value;
    document.querySelector("#redSet").innerHTML = elteresMertekerr;

    let elteresMertekerg = document.querySelector("#greenValue").value;
    document.querySelector("#greenSet").innerHTML = elteresMertekerg;

    let elteresMertekebb = document.querySelector("#blueValue").value;
    document.querySelector("#blueSet").innerHTML = elteresMertekebb;

    let szin = "rgb(" + elteresMertekerr + "," + elteresMertekerg + "," + elteresMertekebb + ")";
    document.getElementById("RGBkodMegjelenito").innerHTML = szin;
    document.body.style.backgroundColor = szin;

}

blueValue.addEventListener('change', bluefunction);

function bluefunction() {
    let elteresMertekerr = document.querySelector("#redValue").value;
    document.querySelector("#redSet").innerHTML = elteresMertekerr;

    let elteresMertekerg = document.querySelector("#greenValue").value;
    document.querySelector("#greenSet").innerHTML = elteresMertekerg;

    let elteresMertekebb = document.querySelector("#blueValue").value;
    document.querySelector("#blueSet").innerHTML = elteresMertekebb;

    let szin = "rgb(" + elteresMertekerr + "," + elteresMertekerg + "," + elteresMertekebb + ")";
    document.getElementById("RGBkodMegjelenito").innerHTML = szin;
    document.body.style.backgroundColor = szin;

}