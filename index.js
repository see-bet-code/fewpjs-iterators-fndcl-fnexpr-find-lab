const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const result = array.find( function(obj) { return obj.result === "W" })
  return result ? result.year : undefined
}