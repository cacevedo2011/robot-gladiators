// this creates a function named "fight"

var name = "your name";
console.log(name);

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName

window.alert(playerName);
function fight() {
    console.log(playerName);
  }
  fight()
