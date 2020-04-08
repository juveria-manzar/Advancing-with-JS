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



/**Prototype object of the constructor function is shared among all the objects created using the constructor function. *
 * Thus to avoid repitition and redundancy we use protype objects to create objects of a particular function (like class)*/


/**As prototype object is an object, we can attach properties and methods to the prototype object. 
 * Thus, enabling all the objects created using the constructor function to share those properties and methods.
 * The new property can be added to the constructor function’s prototype property using either the dot notation or 
 * square bracket notation*/
function Human(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        }
}

//Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name) //Output: Ashwin

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);
//Create an empty constructor function
function Person() {

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin";
Person.prototype.age = 26;
Person.prototype.sayName = function() {
    console.log(this.name);
}

//Create an object using the Person constructor function
var person1 = new Person();

//Access the name property using the person object
console.log(person1.name) // Output" Ashwin

console.log(person1) //undefined

//So how does the output of console.log(person.name) was “Ashwin”?

/**When we try to access a property of an object, JavaScript engines first tries to find the property on the object,
 *  if the property is present on the object it outputs its value. But, if the property is not present on the object 
 * then it tries to find the property on the prototype object or dunder proto of the object. If the property is found 
 * the value is returned else JavaScript engine tries to find the property on the dunder proto of the object. 
 * This chain continues until the dunder proto property is null. In these cases, the output will be undefined. */


//create another object person2 using the Person constructor function.
var person2 = new Person();
//Access the name property using the person2 object
console.log(person2.name) // Output: Ashwin

//Now, define a property name on the person1 object
person1.name = "Anil"
console.log(person1.name) //Output: Anil
console.log(person2.name) //Output: Ashwin

/**Here person1.name outputs “Anil”. As mentioned earlier, JavaScript engine first tries 
 * to find the property on the object itself. In this case, name property is present on the object person1 itself, 
 * hence JavaScript engines outputs value of name property of person1.
In the case of person2, the name property is not present on the object. Hence, it outputs person2’s prototype 
object’s property name. */