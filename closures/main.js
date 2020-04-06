/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-06 21:44:00
 * @desc functions in JavaScript form closures. 
 * A closure is the combination of a function and the lexical environment within which that function was declared. 
 * This environment consists of any local variables that were in-scope at the time the closure was created.
 */

function person() {
    let people = [];

    function defName(name) {
        people.push(name)
        console.log(name)
        return people
    }
    return defName;
}

var personGen = person()
personGen("juveria")

////////////////MODULE PATTERN//////////////////////
/**
 * Module pattern returns api to a user and they could use that api to interact with it  
 */

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

// player.endGame() //throws error