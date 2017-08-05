/**
 * Entry point for your program
 * 
 * @param {Array} ttt - The 2 dimensional array which shows the current state of game.
 * @param {string}  symbol - Denotes your symbol - 'X' or 'O'.
 * @returns {Array} The updated state of tictac board
 */
function titans(ttt, symbol) {
  return [
    [null, null, null],
    [null, symbol, null],
    [null, null, null]
  ];
}