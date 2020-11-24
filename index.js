const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winner = arr.find (game =>{
    return game.result === "W"
  })
  return winner? winner.year : winner
}
  