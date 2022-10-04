

console.log(enemy.names);
console.log(enemyInfo.length);
console.log(enemy.names[0]);
console.log(enemy.names[3]);



var fight = function(enemy) {

  while(playerInfo.health > 0 && enemy.health > 0) {
   
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  
     // if player picks "skip" confirm and then stop the loop
       if (promptFight === "skip" || promptFight === "SKIP") {
       // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
              // subtract money from playerInfo.money for skipping
              playerInfo.money = Math.max(0, playerInfo.money - 10);
              console.log("playerInfo.money", playerInfo.money)
              break;
            }
          }   


    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack- 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.names + ". " + enemy.names + " now has " + enemy.health + " health remaining."
    );

    
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      //award player money for winning
      playerInfo.money = playerInfo.money + 20;

    break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
      // remove player's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );    
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    } 
 
 } //end of while loop
}; //end of fight function

 //function to start new game
 var startGame= function() {
  // reset player stats
playerInfo.reset();

//fight each enemy-robot by looping over them and fighting the one at at time
for (var i = 0; i < enemyInfo.length; i++) {
  //if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    //lets the player know which round they are in
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
   //pick new enemy to fight based on the index of the enemy.names array
   var pickedEnemyObj = enemyInfo[i];

   //set health for picked enemy
   pickedEnemyObj.health = randomNumber(40, 60);


   fight(pickedEnemyObj);

    // if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      // ask if player wants to use the store
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

    //if yes, take them to the store() function
    if (storeConfirm){
        shop();
    }
  }
}
//if player is not alive, break out of the loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;  
    }
  }
  endGame(); 
 };

 var endGame = function() {
  if (playerInfo.health > 0){
    window.alert("Good job, you've survived the game! You now have a score of" + playerInfo.money + ".");
  }
  else {
  window.alert("You have lost your robot in battle.");
 };
//play again confirmation
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  //restart game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
 
var shop = function () {
   var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
   );

    switch (shopOptionPrompt) {
      case "refill":
      case "REFILL":
       playerInfo.refillHealth();
        break;
        
      case "upgrade":
      case "UPGRADE":  
      playerInfo.upgradeAttack();
          break;
      case "leave":
      case "LEAVE":  
        window.alert("Leaving the store.");
        break;
        default:
          window.alert("You did not pick a valid option. Try again.");

          shop();
          break;
    }
  };

  // function to generate a random numeric value
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
  };

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough currency!")
    }
  },
  upgradeAttack: function() {
  if (this.money >= 7){
    this.attack += 6;
    this.money -= 7;
    }
  

  else {
    window.alert("You don't have enough currency!");
  }
 }
};


var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


  
//start first game when page loads
startGame();