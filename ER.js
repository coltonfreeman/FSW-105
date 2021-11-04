var readlineSync = require('readline-sync');
//Request Player's Name
var playerName = readlineSync.question('May I have your name please? ');

const welcomeMessage = `Welcome, ${playerName} to the Escaoe Room Game Simulation!`;
console.log(welcomeMessage);

//Boolean Flags
var hasKey = false;
var isAlive = true;

while(isAlive == true){
    const menuSelection = readlineSync.keyIn('Enter 1 to put hand in hole, Enter 2 to find the key, or, Enter 3 to open the door', {limit: '$<1-3>'});
    if (menuSelection == 1){
        //dispaly dead message, game over
        console.log(`Oh no, ${playerName}, it appears you put hand in the hole. You are DEAD, unfortunately! GAME IS OVER.`);
        isAlive = false;
    } else if (menuSelection == 2 && hasKey == false){
        //Player has not found the key yet
        console.log(`Great job, ${playerName}, you have found the key successfully. Please proceed to the next menu option`);
        hasKey = true;
    } else if (menuSelection == 2 && hasKey == true){
        //Player has found the key
        console.log(`${playerName}, you have ALREADY found the key successfully, stop wasti6ng time. Please proceed to the next menu option`);
    } else if (menuSelection == 3 && hasKey == false){
        //Player has not found the key yet
        console.log(`${playerName}, to be able to escape the room successfully, you will need to find the key by visiting menu option 2 first.`);
    } else if (menuSelection == 3 && hasKey == true){
        //Player has found the key, exits successfully, game over
        console.log(`Great Job, ${playerName}, you have found the key successfully, and have opened the exit door successfully.`);
        console.log(`Congratulations, ${playerName}, you escaped the game room successfully! Great Job.`);
        isAlive = false;
    }
}
