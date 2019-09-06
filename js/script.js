$(function(){
    $( ".display-border" ).hide();
    // $( ".message-notification" ).hide();
    // $( ".homescreen" ).hide();
    $( ".round-icon" ).click(function() {
        $( ".display-border" ).show();
        $(".homescreen").hide();
        $( ".watch-screen" ).css({'background-color':'#222831','background-image':'none'});

    })

})
