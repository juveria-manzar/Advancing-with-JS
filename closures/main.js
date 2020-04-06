// function person() {
//     return function() {
//         console.log('hello')
//     }
// }

// var personGen = person()

// personGen()


// //////////////////////////////////////////////

function characterController(characterName) {
    let nam = characterName;
    let hp = 100;
    let lvl = 0;

    function drinkPotion() {
        hp += 100;
        console.log(`${name} has drank a potion and HP increased to ${hp}`)
        if (hp < 1) {
            hp = 100;
            console.log(`${name} has has drank a potion and recovered his HP`)
        }
    }

    function takeDmg(dmg) {
        hp -= 100;
        console.log(`${name} has taken ${dmg} points of damage and is currently at ${hp} HP`)
        if (hp <= 0) {
            return endGame()
        }
    }


    function endGame() {
        console.log(`GAME OVER~ ${name} was at level ${lvl}`)
    }

    function levelUp() {
        lvl++
        console.log(`${name} has leveled up to level ${lvl}`)
    }

    return {
        drinkPotion: drinkPotion,
        takeDmg: takeDmg,
        levelUp: levelUp
    }
}

var player = characterController("juveria");

player.endGame() //throws error