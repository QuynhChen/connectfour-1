$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

var player1 = document.querySelector(".player1")
var player2 = document.querySelector(".player2")

$('.button_row #button').click(function(){
    // var buttonColumn = $(this).attr("class")


    player1.nextElementSibling.classList.add("player1");


    // player2.nextElementSibling.classList.add("player2");



  })
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

