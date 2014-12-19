$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

var player1 = document.querySelector(".player1")
var player2 = document.querySelector(".player2")

// $('.button_row #button').click(function(){

//   })


$('.button_row .column_1').click(function(){
  $('.column#1 :last-child').addClass('player1');
  })
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

