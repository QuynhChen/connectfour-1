$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

$('.button_row #button').click(function(){
  var col = this.attr("class")

  piece = Game.addPiece({col: col})
  // this.innerHTML = piece

});


Game.board[0][0]
Game.board[1][0]

// MODEL LOGIC

Game = {

  board: [
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,]
  ]

  currentTurn: "Red"

  addPiece: function() {
    var col = obj.col

    for (i=0;i<board.length;i++)
      if (Game.board[i][col] === null) {
        //put piece
        Game.board[i][col] = "X";
      }

  }



}
