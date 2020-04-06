/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-04-07 01:03:05
 * @modify date 2020-04-07 01:03:05
 * @desc map, filter, and reduce methods to manipulate arrays of objects.
 * basic idea  is 90-95% of what we do will be dervied from functions
 */

let arr = [1, 2, 3, 4, 5]

//Map
let mappedArray = arr.map(function(value, index, array) {
    return value * 2;
})
console.log("Mapped Array: ", mappedArray)


//Filter
let filteredArray = arr.filter(function(value, index, array) {
    return index === 0 || index === (array.length - 1)
        // return value % 2 === 0
})
console.log('Filtered Array: ', filteredArray)


/**Reduce doesnt return an array
 *It sorts of reduces the array to one value
 */
let reducedArray = arr.reduce(function(acc, value, index, array) {
        return acc + value;
    }, 0) //initial value of acc (0). by default it is first arr[0]
console.log("Reduced Array", reducedArray)


//Some()->at least one
let bool1 = arr.some(function(value) {
    return value > 4
})
console.log('Some: ', bool1)

let bool2 = arr.some(function(value, index) {
    return index == 6
})
console.log('Some: ', bool2)

//Every()->all values
let bool3 = arr.some(function(value, index) {
    return value < 6
})
console.log('Every: ', bool3)