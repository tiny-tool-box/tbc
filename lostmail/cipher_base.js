
 function cipher_(original, direction = -1) {
        if (direction==0){
            console.log(original2)
            return original;
        }
        const A = $("#cipher").val().split('').reduce( (acc, cur) => acc + 1, 0);
        const B = $("#cipher").val().split('').reduce( (acc, cur) => acc + (cur == 's' ? 1 : 0), 0);
        const C = $("#cipher").val().split('').reduce( (acc, cur) => acc + (cur == 'o' || cur == 'i' ? 1 : 0), 0);

        const range1_membership = (x) => x.charCodeAt(0) >= 'a'.charCodeAt(0) && x.charCodeAt(0) <= 'z'.charCodeAt(0);
        const range2_membership = (x) => x.charCodeAt(0) >= 'A'.charCodeAt(0) && x.charCodeAt(0) <= 'Z'.charCodeAt(0);
        const range1 = ('z'.charCodeAt(0)-'a'.charCodeAt(0))
        const offset1 = 'a'.charCodeAt(0)
        const range2 = ('Z'.charCodeAt(0)-'A'.charCodeAt(0))
        const offset2 = 'A'.charCodeAt(0)

        let adj1 = direction*A*B;
        let adj2 = direction*C;

        while (adj1<0) {
            adj1 += range1;
        }

        while (adj2<0) {
            adj2 += range2;
        }


        const range1_wrap = (x) => String.fromCharCode( (x.charCodeAt(0) + adj1 - offset1)%range1 + offset1);
        const range2_wrap = (x) => String.fromCharCode( (x.charCodeAt(0) + adj2 - offset2)%range2 + offset2);

        return original.split('').map( (x) => range1_membership(x) ? range1_wrap(x) : (range2_membership(x) ? range2_wrap(x) : x ) ).join('');
 }
 function cipher(direction){
    $(".code,.bureaucrat").each(function(){
        let original = $(this).attr('original') || $(this).text();
        $(this).attr('original', original);
        $(this).text(cipher_(original, direction));
    });

    $(".coded-image").each(function(){
        if ($(".checksum").text() == "The passcode is correct!") {
            $(this).html("<a href='" + cipher_($(this).attr('data-link'), direction) + "'><img src='" + cipher_($(this).attr('data-src'), direction) + "'></a>")
        } else {
            $(this).html("");
        }
    });

    if ($(".checksum").text() == "The passcode is correct!") {
        $(".code").addClass("correct");
    } else{
        $(".code").removeClass("correct");
    }
/*
    $("#body").text(replacement)

    original = $(".hiddenimg").css("background-image")
    console.log(original)
    replacement = ""
    original.split('').forEach(function(c) {
        if (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)){
            replacement += String.fromCharCode( 'a'.charCodeAt(0) + (c.charCodeAt(0) + 1 )%('z'.charCodeAt(0)-'a'.charCodeAt(0)) )
        } else if (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)){
            replacement += String.fromCharCode( 'A'.charCodeAt(0) + (c.charCodeAt(0) + 1 )%('Z'.charCodeAt(0)-'A'.charCodeAt(0)) )
        } else {
            replacement += c
        }
        
    });

    $(".hiddenimg").css("background-image", "url('dsdfasd')")

    $(".hiddenimg").text(replacement)*/
 }

 $( document ).ready(function() {

    $(".question").attr("value",function(){
        return $(this).text()
    })

    $(".question").html("&nbsp;")

    $( ".question" ).hover(function() {
        look_for = $(this).attr("value")
      $( ".question" ).css( "background-color", function(){
        if ($(this).attr("value") == look_for){
            $(".status").text(look_for)
            return "red";
        }
        return "#bbb";
      } );
    });

});
