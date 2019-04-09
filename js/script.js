
jQuery(document).ready(function($) {
    // Votre code ici avec les appels à la fonction $()

    // Ajout de l'item
    $("button").click(function () {
        var ajout = "<li>" + $("input").val() + "</li>";
        $("ul").append(ajout);
    })
    // Avec délégation
    $("ul").on("click", "li", function(){
        if ($(this).attr("class") == "check") {
            $(this).attr({class: "nocheck"});
        }
        else{
            $(this).attr({class: "check"});
        }
    } )
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
});

class Item {
    constructor(tache, checked){
        if (typeof (tache) == "string"){
            this.tache = tache;
        }
        else{
            alert("No string");
        }
        if (typeof (checked) == "boolean"){
            this.tache = checked;
        }
        else{
            alert("No boolean");
        }
        t
    }
}