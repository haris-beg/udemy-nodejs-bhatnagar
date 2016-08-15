$(function(){
    
    var buttonHover = new buzz.sound( "../sounds/button-3", {
    formats: ["mp3"]
    });
    
    $(document).on('mouseover','.fancybox',function(e){
         buttonHover.play();
    });
    
    $(document).on('mouseleave','.fancybox',function(e){
        buttonHover.stop();
    });
   
    
    
   $(".fancybox").fancybox({
        padding : 0
    });    
});