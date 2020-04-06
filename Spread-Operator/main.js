/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-06 22:28:01
 * @desc Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
 * It is mostly used in variable array where there is more than 1 values are expected.
 * It allows us the privilege to obtain a list of parameters from an array.
 */

let arr = ["Juveria", "Welcome"]

function greet(name, greeting) {
    console.log(`hello ${name}, ${greeting}`)
}

// greet(arr) //like name=arr, greeting:undefined

greet(...arr) //great(arr[0],arr[1])

///////////////////////////////
let nums = [32, 567, 894, 43]
    // Math.max(nums)//error
console.log(Math.max(...nums))

///////////////////////////////

let nums1 = [1, 2, 3, 4, 5, 6, 7]
let nums2 = [8, 9, 10, 11, 12, 13, 14]

// let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let all = [...nums1, ...nums2]
console.log(all)


////////////////////////////

let earthling = {
    race: "human",
    place: "earth"
}

let me = {
    ...earthling,
    name: "juveria"
}

console.log(me)