$(".container").mousemove(function(e) {
    parallaxIt(e, ".keyword1", 50);
    parallaxIt(e, ".button_a", 80); 
    parallaxIt(e, ".keyword2", 50);
    parallaxIt(e, ".button_i", 80); 
    parallaxIt(e, ".keyword3", 50);
    parallaxIt(e, ".button_s", 80); 
    parallaxIt(e, ".interrogation_button", 80); 
});


function parallaxIt(e, target, movement) {
  var $this = $(".container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});
