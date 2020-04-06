/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-06 21:59:14
 * @desc A code block simply consists of grouped statements with curly braces ({ }).
 * 
 * var and let diff:
 * Variables declared with var or created by function declarations in non-strict mode do not have block scope. 
 * 
 * identifiers declared with let and const do have block scope:
 */

var x = 1; {
    var x = 2;
}
console.log(x); //2

let y = 1; {
    let y = 2;
}
console.log(y); // logs 1 //same is true of const.


////////////////////////////////////////

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i) //10times10
    }, 1)
}

for (let j = 0; j < 10; j++) {
    setTimeout(function() {
        console.log(j) //0-9
    }, 1)
}

//as let is sscoped to the block it will create a new variable for every iteration.

for (var k = 0; k < 10; k++) {
    (function() {
        var oldK = k
        setTimeout(function() {
            console.log(oldK) //0-9
        }, 1)
    })()
}

//////////////////////////

{
    let connectionKey = "648r4i9ioejdjkpeo0r3499"

    function connect(key) {
        console.log("success")
    }

    connect(connectionKey)
}

connect("yhijak")

// connect(connectionKey)//error