function Lathatosag() {
    let allapot = jelszoMezo.getAttribute("type");
    if (allapot == "text") {
        jelszoMezo.setAttribute("type", "password");
        szemikon.setAttribute("src","nyitott_szem.png");
        szemikon.setAttribute("alt","jelszó elrejtése");
        szemikon.setAttribute("title","jelszó elrejtése");
    } else {
        jelszoMezo.setAttribute("type", "text");
        szemikon.setAttribute("src","zart_szem.png");
        szemikon.setAttribute("alt","jelszó megjelenítése");
        szemikon.setAttribute("title","jelszó megjelenítése");
    }
}