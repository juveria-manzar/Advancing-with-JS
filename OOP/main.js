/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-07 08:32:29
 * @modify date 2020-04-07 08:32:29
 * @desc property vs method:
 * property a variable that is attached to an object
 * method vs function
 * method is afunction thatis attached to an object
 * 
 * Js doesnt support oop. it just has a way to stimulate oop properties
 */

let obj = {
    name: "Juveria",
    sleep: function() {
        console.log(`${this.name} is sleeping`)
    }
}
obj.sleep()

/////////////////////

function Enemy(name, level) {
    this.name = name;
    this.level = level;
    this.hp = 100 + (this.level * 10);


    this.findPlayer = function() {
        console.log('Looking for player')
    }

    this.takeDmg = function(num) {
        this.hp -= num
        console.log(`${this.name} is at ${this.hp} HP`)
    }
}

let weakEnemy = new Enemy("Dushmann")

console.log(weakEnemy.name)
weakEnemy.findPlayer()
weakEnemy.takeDmg(600)