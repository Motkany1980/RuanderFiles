console.log("Start");
$(document).ready(function () {
//Ide jön a JQuery

//text(): Az adott elem szöveges tartalmával tér vissza:
$("#textErtekGomb").click(function(){
alert("Szöveges tartalom: ["+$("#leiras").text()+"]");
});

$("#htmlErtekGomb").click(function(){
alert("HTML kód: ["+$("#leiras").html()+"]");
});

$("#valErtekGomb").click(function(){
alert("Input érték: ["+$("#szamBeviteliMezo").val()+"]");
});

$("#atrErtekGomb").click(function(){
alert("Input típus: ["+$("#szamBeviteliMezo").attr("type")+"]");
});

$("#textErtekGomb1").click(function(){
$("#leiras").text("<b>Módosított szöveg</b>");
});

$("#htmlErtekGomb1").click(function(){
$("#leiras").html("<b>Módosított szöveg</b>");
});

$("#valErtekGomb1").click(function(){
$("#szamBeviteliMezo").val(42);
});

$("#atrErtekGomb1").click(function(){
$("#szamBeviteliMezo").attr("type","password");
});

$("#atrErtekGomb2").click(function(){
$("#szamBeviteliMezo").attr("type","number");
});

//Új elemek hozzáfűzése html kódhoz
// append()
$("#listaElejetBovitoGomb").click(function(){
$("ul").append("<li>append ()</li>");
});


// prepend()
$("#listaVegeBovitoGomb").click(function(){
$("ul").prepend("<li>prepend ()</li>");
});


// before()
$("#listaeleBovitoGomb").click(function(){
$("ul").before("<li>before ()</li>");
});

// after()
$("#listaMogeBovitoGomb").click(function(){
$("ul").after("<li>after ()</li>");
});

// elemek törlése html kódból
// empty()
$("#emptyFunction").click(function(){
$("ul").empty();
});


// remove()
$("#removeFunction").click(function(){
$("li").remove();
});

//Vége
});
