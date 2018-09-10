   // authentication
   $('#login-button').click(function() {
    $("#container").fadeOut(function(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
   });
   
   $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
      $('#forgotten').click(function(){
    });
   });
   });
   });

   $(".newUser").click(function() {
    window.location.href = "/signup"
   });

   $(".alreadyUser").click(function() {
    window.location.href = "/signin"
   });