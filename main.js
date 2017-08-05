// ttt or tictactoe array
var ttt = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
var tttNull = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
var GMFORMAT = [
  [1,0,1,0,1,0,1,0,1],
  [1,1,0,1,0,1,0,1,0],
  [1,0,0,1,0,1,0,1,0],
  [1,1,0,0,1,1,0,0,1]
];
var GM;

var team1 = {};
var team2 = {};

//  ttt = [
//   [null, null, 'X'],
//   ['X', 'X', 'X'],
//   [null, null, 'X']
// ];
// check which are the 2 teams

// start the game
$('#start').click(function() {
  console.log(' Game Started ');

  function copy(array) {
    return array.map(function(arr) {
      return arr.slice();
    });
  }

  ttt = copy(tttNull);
  registerTeamFunctions(demo, demo);
  decideGameFormat(0);
  var gameStatus = startGame();
  if(gameStatus === 'GAME_OVER') {
    return;
  }
});

// register their respective functions
function registerTeamFunctions(arg1, arg2) {
  team1['function'] = arg1;
  team2['function'] = arg2;
}

function decideGameFormat(chosenIndex) {
  GM = GMFORMAT[chosenIndex];
}

function startGame() {
  for(var i = 0; i < GM.length; i++) {
    if(GM[i]) {
      team1['function'](ttt, 'X');
    } else {
      team2['function'](ttt, 'O');
    }
    renderTTT(ttt);
    var winnerSymbol = isTTTComplete(ttt);
    if(winnerSymbol) {
      if(winnerSymbol === 'X') {
        updateTeamPoints(team1, team2);
      }
      return 'GAME_OVER';
    }
  }
}

function updateTeamPoints (team1, team2) {
  
}

// render TTT
function renderTTT(ttt) {
  for(var i = 0; i < ttt.length; i++) {
    var tttRow = ttt[i];
    for(var j = 0; j < tttRow.length; j++) {
      let node = '#' + i + j;
      $(node).text(tttRow[j]);
    }
  }
}

// decide continue or winner
function isTTTComplete(ttt) {  
  var winningFormations = [
    [ttt[0][0], ttt[0][1], ttt[0][2]],
    [ttt[1][0], ttt[1][1], ttt[1][2]],
    [ttt[2][0], ttt[2][1], ttt[2][2]],
    [ttt[0][0], ttt[1][0], ttt[2][0]],
    [ttt[0][1], ttt[1][1], ttt[2][1]],
    [ttt[0][2], ttt[1][2], ttt[2][2]],
    [ttt[0][0], ttt[1][1], ttt[2][2]],
    [ttt[2][0], ttt[1][1], ttt[0][2]]
  ];

  for(var i = 0; i < winningFormations.length; i++) {
    var nodes = winningFormations[i];
    var result = areSymbolsInLine(nodes[0], nodes[1], nodes[2]);
    if(result) {
      console.log('WON ' + result);
      return result
    }
  }
  console.log('Continue Game Play');
  return false;

  function areSymbolsInLine(arg1, arg2, arg3) {
    if(arg1 != null && arg1 === arg2 && arg1 === arg3) {
      return arg1;
    }
    return false;
  }
}