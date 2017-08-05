/**
 * Entry point for your program
 * 
 * @param {Array} ttt - The 2 dimensional array which shows the current state of game.
 * @param {string}  symbol - Denotes your symbol - 'X' or 'O'.
 * @returns {Array} The updated state of tictac board
 */
function demo(ttt, symbol) {

  var nullArray = [];
  for(var i = 0; i < ttt.length; i++) {
    var tttRow = ttt[i];
    for(var j = 0; j < tttRow.length; j++) {
      if(tttRow[j] == null) {
        nullArray.push("" + i + j);
      }
    }
  }

  var length = nullArray.length;
  var randomIndex = Math.floor(Math.random() * length);

  var node = parseInt(nullArray[randomIndex]);
  ttt[Math.floor(node/10)][Math.floor(node%10)] = symbol;
  return ttt;
}