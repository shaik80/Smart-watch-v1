    // Project Name: Weather app 
    // Description: This application is base on smart watch we have try to put some of the feature's
    // of smart watch
    // language: HTMl,CSS,JS,bootsrap(framework)
    // Author: Shaik Mudassir
    // Github: https://github.com/shaik80

$(function(){
  $(".timer").toggle();
  $(".message").toggle();
  $(".message-notification").toggle();
  $(".music").toggle();
  let messages = [
    {
      sendermessage:"hi bro",
      recivermessage:"hi bro",
      shotmessage:"hello bro..",
      sendername:"Shaik Mudassir",
      phoneno:"8050681782"
    },
    {
      sendermessage:"how r u",
      recivermessage:"i'm f9",
      shotmessage:"how r ...",
      sendername:"Md Mudassir",
      phoneno:"9902932793"
    },
    {
      sendermessage:"wr r u",
      recivermessage:"i'm at home",
      shotmessage:"wr r u....",
      sendername:"sup",
      phoneno:"0987654321"
    }
      ];
    
    $("#list1").html(messages[0].shotmessage);
    $("#list2").html(messages[1].shotmessage);
    $("#list3").html(messages[2].shotmessage);
      
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    let intervalId = 0;
      
  setInterval(show_time, 1000);

  //message 
  function show_time(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let dayword = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let session = "AM";
    if(h == 0){
      h = 12;
    }
    if(h > 12){
      h = h - 12;
      session = "PM";
    }
    $("#time").html(h +":"+m);
    $("#day").text(dayword[now.getDay()]);
  }  


//timer
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
  $("#start-btn").fadeOut().css('pointer-events','none')

});
$("#stop-btn").on('click', () => {
  $("#start-btn").fadeIn().css('pointer-events','auto')
    if(intervalId != 0){
        clearInterval(intervalId);      
    }
    $('#laps').html( "Lap: " + hour + ":"+  minute +":"+  seconds );
});



$("#reset-btn").on('click', () => {
  $("#start-btn").fadeIn().css('pointer-events','auto')
   totalSeconds = 0;
   $("#hour").html("0");
   $("#minute").html("0");
   $("#seconds").html("0");
   $('#laps').html( "Lap: 0:0:0");
   if(intervalId != 0){
    clearInterval(intervalId);
    }
    });


//click event
$("#list1").on("click", function() {
  $(".message-notification").hide();
  $(".message").show();
  $("#name").html(messages[0].sendername);
  $("#phone-no").html(messages[0].phoneno);
  $("#sender").html(messages[0].sendermessage);
  $("#reciver").html(messages[0].recivermessage);
});

$("#list2").on("click", function() {
  $(".message-notification").hide();
  $(".message").show();
  $("#name").html(messages[1].sendername);
  $("#phone-no").html(messages[1].phoneno);
  $("#sender").html(messages[1].sendermessage);
  $("#reciver").html(messages[1].recivermessage);

});

$("#list3").on("click", function() {
  $(".message-notification").hide();
  $(".message").show();
  $("#name").html(messages[2].sendername);
  $("#phone-no").html(messages[2].phoneno);
  $("#sender").html(messages[2].sendermessage);
  $("#reciver").html(messages[2].recivermessage);

});

  $( ".music-icon" ).click(function() {
      $(".music").toggle();
      $(".timer,.message-notification,.message").hide();
  });

  $( ".clock-icon" ).click(function() {
      $(".timer").toggle();
      $(".music,.message-notification,.message").hide();

  });
  $( ".watch-screenlock" ).click(function() {
      $(".watch-screenlock").fadeOut();
  });

  $( ".comments-icon" ).click(function() {
      $(".music,.timer,.message").hide();
      $(".message-notification").slideDown();
  });
  $( ".message-notification" ).dblclick(function() {
      $(".music,.message,.timer").hide();
      $(".message-notification").slideUp();
  });
  $( ".message" ).dblclick(function() {
      $(".music,.message-notification,.timer").hide();
      $(".message").slideUp();
    });
})