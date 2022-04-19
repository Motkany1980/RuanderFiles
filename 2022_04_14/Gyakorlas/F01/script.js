      $(document).ready(function () {
          $("#elemMegjelenito").click(function () {
              $("#megjelenitendoElem").slideToggle("slow", function () {
                  console.log("toogle")
              });
          });

          let counter = 0;
          $("#vizsgalandoSzoveg").keypress(function (e) {
              counter += 1;
              console.log(counter)
              console.log(e)
              $("#szovegMeret").text(counter + " (karakter)");
          });

          $("#megjelenitoGomb").click(function () {
              let elem=document.querySelector("#jelszoMezo").getAttribute("type");
              console.log(elem);
              if(elem =="password"){
                  $('#jelszoMezo').attr('type', 'text');
                }else{
                    $('#jelszoMezo').attr('type', 'password');
            }
          })
      });