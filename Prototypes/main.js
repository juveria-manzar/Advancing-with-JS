/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-08 08:23:07
 * @modify date 2020-04-08 08:23:07
 * @desc Prototypes
 * https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
 */

//Creating obj using function
//Ex-1
{
    function createObject(name) {
        let obj = {}
        obj.name = name; //dynamic properties
        obj.coding = function() {
            console.log(`${obj.name} is coding`)
        }
        return obj
    }

    let myObj = createObject("Juveria")
    myObj.coding()
}

//this method of creating object is verbose.

///EX-2///
{
    function createObject(obj, name) {
        obj.name = name; //dynamic properties
        obj.code = function() {
            console.log(`${obj.name} is coding`)
        }
    }
    let myObj = {}
    createObject(myObj, "Juveria")
    myObj.code()

    let myObj2 = {}
    createObject(myObj2, "alice")
    myObj2.code()
}

//using this
{
    function createObject(name) {
        this.name = name; //dynamic properties
        this.code = function() {
            console.log(`${this.name} is coding`)
        }
    }
    // here this is referring to windows obj
    let myObj = {}
    createObject("Juveria")
    code()

    // let myObj2 = {}
    createObject("alice")
    code()
}

{
    function createObject(name) {
        this.name = name; //dynamic properties
        this.code = function() {
            console.log(`${this.name} is coding`)
        }
    }
    // call()
    let myObj = {}
    createObject.call(myObj, "Juveria")
    myObj.code()

    let myObj2 = {}
    createObject.call(myObj2, "Alice")
    myObj2.code()
}

//new keyword
{
    function createObject(name) {
        this.name = name; //dynamic properties
        this.code = function() {
            console.log(`${this.name} is coding`)
        }
    }
    let myObj = new createObject("Juveria")
    myObj.code()

    let myObj2 = new createObject("Alice")
    myObj2.code()
}
// to execute the above block of code js engine will have to create two instances of the the same 
//constructor function each for obj1 and obj2
/**It doesn’t make sense to have two instances of function fullName that do the same thing. 
 * Storing separate instances of function for each object results into wastage of memory.
 * 
 *  To solve this issue prototypes is curated*/

/**
 * When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. 
 * This prototype property is an object (called as prototype object) which has a constructor property by default. 
 * The constructor property points back to the function on which prototype object is a property. 
 * the function’s prototype property using functionName.prototype.
 */

/**CreateObject constructor function has a prototype property which points to the prototype object. 
 * The prototype object has a constructor property which points back to the CreateObject constructor function. */

{
    function createObject(name) {
        this.name = name
        this.code = function() {
            console.log(`${this.name} is coding`)
        }
    }
    var myObj = new createObject("Juveria")

    console.log(myObj.__proto__)
    console.log(createObject.prototype)
    createObject.prototype === myObj.__proto__ //true
        //This shows that myObj dunder proto property and createObject.prototype are pointing to the same object.
    let myObj2 = new createObject("Alice")
    createObject.prototype === myObj2.__proto__ //true
    myObj.__proto__ === myObj2.__proto__ //true

    //Above statement proves that the myObj and myObj2 dunder proto properties 
    //points to createObject constructor function’s prototype object.
}

/**
 * prototype property of the function is an object (prototype object) with two properties:
 * constructor property which points to Constructor function(createObj) itself
__proto__ property: We will discuss this while explaining inheritance in JavaScript
 */

/**When an object is created in JavaScript, 
 * JavaScript engine adds a __proto__ property to the newly created object which is called dunder proto. 
 * dunder proto or __proto__ points to the prototype object of the constructor function. */



/**Prototype object of the constructor function is shared among all the objects created using the constructor function. */