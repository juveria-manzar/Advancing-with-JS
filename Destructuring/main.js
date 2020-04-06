/** 
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-06 23:32:36
 * @modify date 2020-04-06 23:32:36
 * @desc ES6 
 * Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, 
 * or properties from objects, into distinct variables.
 * used to extract data from arrays and objects and assign them to variables.
 */


let intro = ["Hello", "Juveria"]
let greet = intro[0]
let name = intro[1]

console.log(greet + " " + name)

var [, , , , ] = ["Hello", "I", "am", "Juveria"];

//basic destructuring 
let introduction = ["Hello", "Juveria"]
let [greeting, naam] = introduction
console.log(greeting + " " + naam)

//Skiping items in an array
var [gree, , , nam] = ["Hello", "I", "am", "Juveria"];
var [, , , , ] = ["Hello", "I", "am", "Juveria"];
console.log(gree); //"Hello"
console.log(nam); //"Juveria"


//Assigning the rest of an array
var [gre, ...intr] = ["Hello", "I", "am", "Juveria"];

console.log(gre); //"Hello"
console.log(intr); //["I", "am", "Juveria"]

//Destructuring Assignment with Functions
function getArray() {
    return ["Hello", "I", "am", "Juveria"];
}
var [gr, pronoun] = getArray();

console.log(gr); //"Hello"
console.log(pronoun); //"I"

//Using Default Values
{
    let [greeting = "hi", name = "Juveria"] = ["hello"];

    console.log(greeting); //"Hello"
    console.log(name); //"Juveria"
}

//Swapping Values
let x = 10;
let y = 40;

[x, y] = [y, x]
console.log("x: ", x)
console.log("y: ", y)


////////////////////Object Destructuring//////////
let obj = {
        title: "hello",
        body: "World"
    }
    // console.log(obj.title)
    // console.log(obj.body)

let { title, body } = obj;
title = title + "sssss"
console.log(title) //helloosssss
console.log(body)
console.log(obj.title) //hello


//////////////////////////////////////////////////

let obj1 = {
    title: "hello",
    body: "World",
    human: "yes",
}

function controllerName(name, { body }) {
    console.log({})
    console.log("Name:", name)
    console.log("Body:", body)
}
controllerName("Juveria", obj1)