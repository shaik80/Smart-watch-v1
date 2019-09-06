$(function(){
    $(".timer").toggle();
    $(".message").toggle();

    $(".music").toggle();
    // $( ".message-notification" ).hide();
    
    $( ".music-icon" ).click(function() {
        $(".music").toggle();
        $(".watch-screen" ).css({'background-color':'#222831'});

    });
    $( ".clock-icon" ).click(function() {
        $(".timer").toggle();
        $(".watch-screen" ).css({'background-color':'#222831'});

    });
    $( ".watch-screenlock" ).click(function() {
      $(".watch-screenlock").fadeOut();
    });
    $( ".comments-icon" ).click(function() {
        $(".message").toggle();
        $(".watch-screen" ).css({'background-color':'#222831'});

    });

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
    //             event.keyCode == 8 ||     //             event.keyCode == 127 || 
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
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    let intervalId = 0;
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds /3600);
      minute = Math.floor((totalSeconds - hour*3600)/60);
      seconds = totalSeconds - (hour*3600 + minute*60);
      $("#hour").html(hour);
      $("#minute").html(minute);
      $("#seconds").html(seconds);
    }
    $("#start-btn").on('click', () => {
      intervalId = setInterval(startTimer, 1000);
    });
    $("#stop-btn").on('click', () => {
        if(intervalId != 0){
            clearInterval(intervalId);
        }
    });
    $("#reset-btn").on('click', () => {
       totalSeconds = 0;
       $("#hour").html("0");
       $("#minute").html("0");
       $("#seconds").html("0");
        });


})