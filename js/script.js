$(function(){
    // $( ".display-border" ).hide();
    // $( ".message-notification" ).hide();
    $( ".homescreen" ).hide();
    $( ".round-icon" ).click(function() {
        $( ".display-border" ).show();
        $(".homescreen").hide();
        $( ".watch-screen" ).css({'background-color':'#222831'});

    })

    // $(".timer-countdown-value").keypress(function(){
    //     $this = $(this);

    //     if($this.val().length == 8){
    //         return false;

    //     }
    //     else if($this.val().length == 2 || $this.val().length == 5){
    //         $this.val($this.val() + ":");
    //         if($this.val().length == 0 || $this.val().length == 5){
    //         }
            
    //     }
    //     $(".timer-countdown-value").keyup(function(){
    //         $("#timer-countdown").html($this.val());
    //         if($("#timer-countdown").html()== ''){
    //             $("#timer-countdown").html("00:00:00");
    //         }
    //     });
        
    //     // Allow only backspace and delete
    //     // Ensure that it is a number and stop the keypress
    //         if (event.keyCode == 58 || 
    //             event.keyCode == 8 || 
    //             event.keyCode == 127 || 
    //             event.keyCode < 48 || 
    //             event.keyCode > 57 || 
    //             event.keyCode > 57) {
    //             event.preventDefault();
    //         }
            
    //  });








    //  $("#timer-start").click(function(){
    //     let countdown = $("#timer-countdown").html().split(":")
    //                     .map(Number);
        
    //     if(countdown[2] == 0){
    //         if(countdown[1] == 0){
    //             if(countdown[0] == 0){
    //             }
    //             else{

    //                 countdown[1] = countdown[1]-1;
    //                 $("#timer-countdown").html(countdown[0]+':'+countdown[1]+':'+countdown[2]);
    //                 countdown[2] = 60;
    //             }
    

    //         }
    //         else{
    //             countdown[1] = countdown[1]-1;                
    //         }
    //     }
    //     else{
    //         countdown[2] = countdown[2]-1,100;
    //         $("#timer-countdown").html(countdown[0]+':'+countdown[1]+':'+countdown[2]);
    //     }
    //     // setInterval( countdown - 1, 100);
    //     console.log(countdown); 
    //  });

})
