var receptek = [];

$(function(){

  
    $.ajax(
        {
            url: "recept.json", 
            success: function(result)
            {
               console.log(result);
               receptek = result.receptkonyv;
               console.log(receptek);
               //$("article").append(receptek[0].nev);
               megjelenit();
            }
        }
      );

  });

  function megjelenit(){;
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>");
    for (var i = 0; i < receptek.length; i++) {
        $("article table").append("<tr></tr>");

        for (var item in receptek[i]) {
            $("article table tr").eq(i + 1).append("<td>" + receptek[i][item] + "</td>");
        }
 
    }

    for (var i = 0; i <= $("article table tr").length; i++) {
        $("article table tr").eq(i).attr('id', i);
    }

    $("article table tr").on("click", kattint);
    $("section div").on("click", kattint2);
    $("article table tr").hover(hatter);

    function hatter(){
        console.log($(this).attr("id"));
        $(this).toggleClass("hatter");
        }
        
  
  }
  function kattint2(){
    if ("section #kep" ) {
        
    }

    }

  function kattint(){
    var azon = this.id;
    if (azon != 0){
    $("#kep").html("<img src='"+receptek[azon -1].kep+"' alt='kep'>");
    }
}