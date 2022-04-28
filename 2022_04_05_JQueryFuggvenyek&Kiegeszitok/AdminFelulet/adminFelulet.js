//Elemek tömeges kijelölése
aktivalo.addEventListener("click", mindenCheck);
function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

//Elemek tömeges kijelölésének megszüntetése
deaktivalo.addEventListener("click", mindenUnCheck);
function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}
//Táblázat csíkozásának ki/be kapcsolása

csikozasbe.addEventListener("click", csikozasBe);
function csikozasBe() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.add("table-striped");
}
csikozaski.addEventListener("click", csikozasKi);
function csikozasKi() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.remove("table-striped");
}

//Táblázat Sötét/Világos mód közötti váltás
darkmode.addEventListener("click", DarkMode);
function DarkMode() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.remove("table-light");
    tablaObjektum.classList.add("table-dark");
}
lightmode.addEventListener("click", LightMode);
function LightMode() {
    let tablaObjektum = document.querySelector("table");
    tablaObjektum.classList.remove("table-dark");
    tablaObjektum.classList.add("table-light");
}
//Táblázatban új "tesztsor feltöltése"
tesztsor.addEventListener("click", ujTablaSor);
function ujTablaSor() {
    let tablaObjektum = document.querySelector("table");
    let sor = tablaObjektum.insertRow();
    let tablaAdat1 = sor.insertCell();
    let tablaAdat2 = sor.insertCell();
    let tablaAdat3 = sor.insertCell();
    let tablaAdat4 = sor.insertCell();
    let tablaAdat5 = sor.insertCell();
    let tablaAdat6 = sor.insertCell();
    tablaAdat1.innerHTML = "teszt";
    tablaAdat2.innerHTML = "teszt";
    tablaAdat3.innerHTML = "teszt";
    tablaAdat4.innerHTML = "teszt";
    tablaAdat5.innerHTML = "teszt";
    tablaAdat6.innerHTML = "teszt";
}

sortorol.addEventListener("click", utolsoSorTorles);
function utolsoSorTorles() {
    let tablaObjektum = document.querySelector("table");
    let utolsoSorID = tablaObjektum.rows.length - 1;
    tablaObjektum.deleteRow(utolsoSorID);
}

//Táblázatban új "tesztsor feltöltése" űrlap alapján
formEllenorzes.addEventListener('click', ujTablaSorUrlapbol);
function ujTablaSorUrlapbol() {
    let tabla = document.querySelector("table");
    let sor = tabla.insertRow();
    let tablaAdat1 = sor.insertCell();//Vezetéknév cella beszúrása
    let tablaAdat2 = sor.insertCell();//Keresztnév cella beszúrsa
    let tablaAdat3 = sor.insertCell();//E-mail cím cella beszúrása
    let tablaAdat4 = sor.insertCell();//Telefonszám cella beszúrása
    let tablaAdat5 = sor.insertCell();//Beosztás cella beszúrása
    tablaAdat1.innerHTML = document.querySelector("#veznev").value;//Vezetéknév beszúrása
    tablaAdat2.innerHTML = document.querySelector("#kernev").value;;//Keresztnév beszúrsa
    tablaAdat3.innerHTML = document.querySelector("#email").value;//E-mail cím beszúrása
    tablaAdat4.innerHTML = document.querySelector("#tel").value;//E-mail cím beszúrása
    tablaAdat5.innerHTML = document.querySelector("#beosztas").value;//E-mail cím beszúrása

    //CheckBox beszúrása
    let tablaAdat6 = sor.insertCell();
    tablaAdat6.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}
