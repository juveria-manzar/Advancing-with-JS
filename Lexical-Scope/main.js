/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-06 21:37:10
 * @desc A lexical scope in JavaScript means that a variable defined outside a function 
 * can be accessible inside another function defined after the variable declaration. 
 * But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
 * word lexical refers to the fact that lexical scoping uses the location where a variable 
 * is declared within the source code to determine where that variable is available.
 */

let thing = "thing"

function myThing() {
    console.log(thing)

    let name = "juveria"

    function myName() {
        console.log(name)
    }

    myName();
}
myThing()
    // myName(); //error