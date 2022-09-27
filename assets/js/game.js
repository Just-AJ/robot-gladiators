var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);



var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
   
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  
     // if player picks "skip" confirm and then stop the loop
       if (promptFight === "skip" || promptFight === "SKIP") {
       // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerName + ' has decided to skip this fight. Goodbye!');
              // subtract money from playerMoney for skipping
              playerMoney = Math.max(0, playerMoney - 10);
              console.log("playerMoney", playerMoney)
              break;
            }
          }   


    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack- 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney = playerMoney + 20;

    break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
      // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );    
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    } 
 
 } //end of while loop
}; //end of fight function

 //function to start new game
 var startGame= function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

//fight each enemy-robot by looping over them and fighting the one at at time
for (var i = 0; i < enemyNames.length; i++) {
  //if player is still alive, keep fighting
  if (playerHealth > 0) {
    //lets the player know which round they are in
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
   //pick new enemy to fight based on the index of the enemyNames array
   var pickedEnemyName = enemyNames[i];

   //reset enemyHealth before startng new fight
   var enemyHealth = randomNumber(40, 60);



   fight(pickedEnemyName);

    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0){
    window.alert("Good job, you've survived the game! You now have a score of" + playerMoney + ".");
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
        if (playerMoney >= 7) {
        window.alert("Refilling player's health  by 20 for 7 dollars.");

        // increase health and decrease money 
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You do not have sufficient funds!");
      }

        break;
        
      case "upgrade":
      case "UPGRADE":  
        if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");

          //increase player attack and decrease money 
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
        }
        else {
          window.alert("You do not have suffiecient funds!");
        }
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

//start first game when page loads
startGame();