$(document).ready(function() {
  var color=["red","blue","green","black","darkpink","orange","violet","aqua","aquamarine","charteuse","cornflowerBlue","crimson","darkmagenta","darkturquoise","turquoise","forestgreen","dodgerblue","fuchsia","gold","goldenRod","greenyellow","IndianRed","Ivory","LawnGreen","Cyan","Lime","Maroon","MediumOrchid","MediunSpringGreen","SpringGreen","Tomato","YellowGreen","RebeccaPurple"];
 

  var randomQuote ="";
  var author ; 
  function getQuote(){
     $("#quote").fadeOut("slow").fadeIn("slow");
    $("#author").fadeOut("slow").fadeIn("slow");
    $("#h").fadeOut("slow").fadeIn("slow");
    var n = Math.floor(Math.random() * color.length);
    document.getElementById("quote").style.color= color[n];
    document.getElementById("e").style.color= color[n];
     document.getElementById("h").style.background= color[n];
    document.getElementById("getQuote").style.background= color[n];
    var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
$("#quote").html(data.quoteText);
      $("#author").html("<blockquote>"+"-"+data.quoteAuthor+"</blockquote>");
    randomQuote=data.quoteText;
    });
  };
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote);
  });
  $("#getQuote").on("click",function(){
    getQuote();
  });
 
  
});