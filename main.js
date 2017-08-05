// start the game
$('#start').click(function() {
  console.log(' Game Started ');
});
// ttt or tictactoe array
var ttt = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

//  ttt = [
//   [null, null, 'X'],
//   ['X', 'X', 'X'],
//   [null, null, 'X']
// ];
// check which are the 2 teams


// register their respective functions
var team1 = demo;
var team2 = demo;

// decide game mode
var GM1 = [1,0,1,0,1,0,1,0,1];
var GM2 = [1,1,0,1,0,1,0,1,0];
var GM3 = [1,0,0,1,0,1,0,1,0];
var GM4 = [1,1,0,0,1,1,0,0,1];

var GM = GM1;

// decide first turn
for(var i = 0; i < GM.length; i++) {
  // setTimeout(function() {
    if(GM[i]) {
      team1(ttt, 'X');
    } else {
      team2(ttt, 'O');
    }
    renderTTT(ttt);
    if(isTTTComplete(ttt)){
      break;
    }
  // }, 1000);
}

// loop start
// team 1 chance

// validate TTT arr

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

// register score

// loop end
