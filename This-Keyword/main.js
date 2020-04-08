/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-07 09:52:13
 * @desc this keyword refers to an object, that object which is executing the current bit of javascript code.
 * https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/
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


const user = {
    name: 'Tyler',
    age: 27,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    },
    mother: {
        name: 'Stacey',
        greet() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}
user.greet() //Tyler
user.mother.greet() //Stacey


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
/*
 * call is a method on every function that allows you to invoke the function specifying in what 
 * context the function will be invoked. 
 * Call is a property on every function and the first argument you pass to it will be the context 
 * in which the function is invoked. */
eatAndDrink.call(human, "Maggi", "Tea")
eatAndDrink.apply(human, ["Tea", "Maggi"])

function greet(l1, l2, l3) {
    console.log(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}

const pers = {
    name: 'Tyler',
    age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(pers, languages[0], languages[1], languages[2])
greet.apply(user, languages)

//.bind is the exact same as .call but instead of immediately invoking the function, 
//it’ll return a new function that you can invoke at a later time. So if we look at our code from earlier

function greeting(l1, l2, l3) {
    console.log(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}

const username = {
    name: 'Tyler',
    age: 27,
}

const language = ['JavaScript', 'Ruby', 'Python']

const newFn = greeting.bind(user, language[0], language[1], language[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python

//new Binding
function User(name, age) {
    /*
      Under the hood, JavaScript creates a new object called `this`
      which delegates to the User's prototype on failed lookups. If a
      function is called with the new keyword, then it's this new object
      that interpretor created that the this keyword is referencing.
    */

    this.name = name
    this.age = age
}

const me = new User('Juveria', 19)