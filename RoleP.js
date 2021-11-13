const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name?');

readlineSync.question('Hello ' + name +', Welcome  Soldier! Where you will risk your life to defend you country. Press Enter to begin.');

const badGuys = ['China  ', 'Russia ', 'Vietnam ', 'Taliban '];
const weapons = ['Browning 50 Cal ', 'Winchester 308 ', 'Ar-15 ', 'MP5 '];
var prize = [];
let userHealth = 50;
const options = ['March ', 'Surrender ', 'Retreat '];
let pickUp = weapons[Math.floor(Math.random() * weapons.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);
    
    const index = readlineSync.keyInSelect(options, 'What would you like to do next?');

    if (options[index] == 'Surrender ') {
        return userHealth = 0;
    } else if (options[index] == 'Retreat '){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'March '){
        let key = Math.random();
        if (key <= .3) {
            console.log('Marching....');
        }else if (key >= .3){
            console.log(badGuy + 'showed up.');
            
            while (badGuysHealth > 0 && userHealth > 0) {
                
                const user = readlineSync.question('What do you want to do? Enter "r" to retreat or "s" to attack: ');

                switch(user){
                    case 'r' : // runaway
                    const run = Math.random();
                    if (run < .5){
                        console.log('Before you can retreat  ' + badGuy + 'attacks you with: ' + badGuysPower);
                    }else {
                        console.log('You Retreated !!');
                        break;
                    }

                case 's': //attack enemy
                    badGuysHealth -= attackPower;
                    console.log('You attacked ' + badGuy + 'with' + attackPower + 'attack power ');

                    userHealth -= badGuysPower;
                    console.log('Enemy just attacked you with: ' + badGuysPower + 'attack power ');

                    if (badGuysHealth <= 0){
                        console.log('You killed ' + badGuy +  '.\n' + badGuy + 'left: ' + pickUp + 'You Save Our Country! ');
                        let loot = Math.random();
                        if (loot <= .3){
                            prize.push(pickUp);
                        }
                    }else if(userHealth <= 0){
                        console.log(badGuy + 'has defeated you. You lost the battle.');
                    }
                }
           }   
        }
    }
}
while(userHealth > 0){
    

    game();
} 
