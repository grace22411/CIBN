$(document).ready(function() {
    var count = 0;
    var images =["images/Re1556893909.jpg","images/Re1556893909.jpg","images/Re1556893909.jpg","images/Re1556893909.jpg"];
    var image = $("section");
  
    image.css("background-image","linear-gradient(to bottom right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("+images[count]+")");
  
    setInterval(function() {
      image.fadeOut(200, function() {
        image.css("background-image","linear-gradient(to bottom right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("+images[count++]+")");
        image.fadeIn(500);
      });
  
      if(count == images.length)
      {
        count = 0;
      }
  
    },5000);


    $(".fa-bars").click(function(){
        $(".modal-content").slideDown();
    })

    $(".fa-times").click(function(){
        $(".modal-content").slideUp();
    })

    //Header Dropdown
    $(".take_away").click(function(){
        $(".drop").slideUp();
        $("header").delay(2000).addClass("back_down");
    });
   $("#acct").hover(function(){
       $(".savings").slideUp();
       $(".media").slideUp();
       $(".investor").slideUp();
       $(".about-us").slideUp();
       $(".Loan").slideUp();
       $(".account").delay(300).slideDown();
       $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
       $(".show").css({"display": "none"});
   });
    
    
    //Next dropdown
   $("#loan").hover(function(){
       $(".account").slideUp();
       $(".savings").slideUp();
       $(".media").slideUp();
       $(".investor").slideUp();
       $(".about-us").slideUp();
       $(".Loan").delay(500).slideDown();
      $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
       $(".show").css({"display": "none"});
   });
    
    
    //Next dropdown
      $("#saving").hover(function(){
       $(".account").slideUp();
       $(".Loan").slideUp();
       $(".media").slideUp();
       $(".investor").slideUp();
       $(".about-us").slideUp();
       $(".savings").delay(500).slideDown();
       $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
       $(".show").css({"display": "none"});
   });
    
   $("#about").hover(function(){
       $(".account").slideUp();
       $(".Loan").slideUp();
       $(".savings").slideUp();
       $(".media").slideUp();
       $(".investor").slideUp();
       $(".about-us").delay(500).slideToggle()
       $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
       $(".show").css({"display": "none"});
   });
    
    $("#media").hover(function(){
       $(".account").slideUp();
       $(".Loan").slideUp();
       $(".savings").slideUp();
       $(".media").delay(500).slideDown();
       $(".investor").slideUp();
       $(".about-us").slideUp();
       $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
   });
    
   $("#investor").hover(function(){
       $(".account").slideUp();
       $(".Loan").slideUp();
       $(".savings").slideUp();
       $(".media").slideUp();
       $(".investor").delay(500).slideDown();
       $(".about-us").slideUp();
       $("header").addClass("hovered");
       $(".hide").css({"display": "inline-block"});
       $(".show").css({"display": "none"});
   }); 
  
                    
   });