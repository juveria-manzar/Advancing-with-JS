/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-07 09:52:13
 * @desc this keyword refers to an object, that object which is executing the current bit of javascript code.
 */
// In STRICT mode the default value of this keyword is undefined 
// * otherwise this keyword act as global object, 
// * it’s called default binding of this keyword. (default is window object in case of browser).

/**
 * By default console works in strict mode. 
 *to understand the functionality use Repl.it */

let me = "Juveria"
    // console.log(this) 
    //By default "this" is a GLOBAL object. property "me" gets added to the global object. Known as default binding.
console.log(this.me) //undefined. let variables dont get added to the global scope.

var my = "Juveria"
console.log(this.my)

//////////////////////

//Implicit Binding
var person = {
        name: "Juveria",
        sleep: function() {
            console.log(this)
                //It's not the global object anymore.
                //Implicit Binding.
                //when we are calling a function that's attached to an obj the obj is KNOWN, context Object.
            console.log(`${this.name} is going to sleep now`)
        }
    }
    //when we are calling a function that's attached to an obj, context Object then this will  refer to the context obje
person.sleep()

////Works////
function sona() {
    console.log(this)
    console.log(`${this.name} abhi soo rahi hai`)
}
var ladki = {
    name: "Juveria",
    sona: sona
}
ladki.sona()


//non-implicit binding//
var obj = {
    human: "Juveria",
    code: function() {
        console.log(this)
        console.log("Coding")
    }
}
let code = obj.code;
code() //no context object. thus this is undefined

//Explicit binding///
var human = {
    name: "Juveria",
    code: function() {
        console.log(this)
        console.log(`${this.name} is coding`)
    }
}

function eatAndDrink(food, drink) {
    console.log(`${this.name} is about to drink ${drink} and eat ${food}`)
}
// eatAndDrink("Maggi", "Tea") //undefined name
// eatAndDrink.call(human) //undefined food and drink
/**call” is a method on every function that allows you to invoke the function specifying in what 
 * context the function will be invoked. */
eatAndDrink.call(human, "Maggi", "Tea")
eatAndDrink.apply(human, ["Tea", "Maggi"])