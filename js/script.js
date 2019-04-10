
jQuery(document).ready(function($) {
    // Votre code ici avec les appels à la fonction $()

    // Ajout de l'item
    $(".ajouter").click(function () {
        var ajout = "<li>" + $("input").val() + "</li>";
        $("ul").append(ajout);
    });
    // Avec délégation
    $("ul").on("click", "li", function(){
        if ($(this).attr("class") == "check") {
            $(this).attr({class: "nocheck"});
        }
        else{
            $(this).attr({class: "check"});
        }
    } );
    /*
    // Sans délégation
    $("li").click(function(){
        if ($(this).attr("class") == "check") {
            $(this).attr({class: "nocheck"});
        }
        else{
            $(this).attr({class: "check"});
        }
    })
    */


class Item {
    constructor(tache, checked){
        if (typeof (tache) == "string"){
            this.tache = tache;
        }
        else{
            alert("No string");
        }
        if (typeof (checked) == "boolean"){
            this.checked = checked;
        }
        else{
            alert("No boolean");
        }
    }
}

$(".save").click(function () {
    console.log("coucou");
    var tab = [];
    $("li").each(function () {
        var instance = new Item($(this).text(),$(this).hasClass("check"));
        var text = JSON.stringify(instance);
        $('.démonstration').append(text);
        console.log( JSON.stringify(instance));
        tab.push(text);

    })
    if (typeof (Storage) !== "undefined"){
        console.log("Storage, ok");
        localStorage.setItem("maListe", JSON.stringify(tab));

    }
    console.log(tab);
});

$(".restaure").click(function () {
    console.log("restauration de la liste");
    var tabsave = JSON.parse(localStorage.getItem("maListe"));
    console.log("Données réccupérées :",tabsave);
    $("ul").text("");
    tabsave.forEach(function(element) {
        console.log(element);
        var obj = JSON.parse(element);
        if (obj.checked) {
            console.log("C'est un checké");
            laclasse = "check"
        }
        else {
            console.log("c'est un non checké");
            laclasse = "nocheck"
        }
        var nouveau = "<li class = ' " + laclasse + " ' >" + obj.tache + "</li>";
        $("ul").append(nouveau);


    });
});



});