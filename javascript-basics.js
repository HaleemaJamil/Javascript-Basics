// Javascript Basics

// VARIABLES

// Dynamic typed language - datatypes are not specified while declaration
// let has block scope - used commonly
// var has global scope
var z = 2
let x = 1
let b = true
let s = 'haleema'
let t = '123'
let f = '12.3'

// Explicit type conversion
b = Number(b) 
String(b)
Boolean(x)
Object(s)
parseInt(t)
parseFloat(f)

console.log("Type of b is ", typeof(b))

// Strings
console.log("Hello" + s.toUpperCase())
console.log("Hello ${s}") // template literals used

// Floating Points to Fixed
console.log((0.1 + 0.2).toFixed(3))  // 3 decimal places 

// NaN and Undefined 
console.log(0/1) 	// 0 
console.log(1/0) 	// Infinity 
console.log(0/0) 	// NaN 
let d 
console.log(d) 		// undefined 

// User Input - Node.js does not have prompt, can try in the browser alternatively
//let x = prompt('Enter a number:') 
// type of input is string by default 

// CONDITIONAL STATEMENTS

// '==': lose comparison (only checks value) 
// '===': strict comparison (checks value & datatype) 
// '0' == 0 	// true 
// '0' === 0 	// false 
// '0' === '0' 	// true 
// 1 == true 	// true 
// 1 === true 	// false 
// 2 == true 	// false 
// !2 == true 	// false 
// !!2 == true 	// false 
// 0 == false 	// true 
// 0 === false 	// false 
// if and else if faster than nested ifs 

// If Condition
let age = 18 
if (age >= 18) { 
    console.log("Adult") 
} 
else if (age < 18) { 
    console.log("Minor") 
} 
else { 
    console.log("Invalid age") 
} 

// Switches
let str = 'dwe'
switch(str) { 
    case 'abc': 
        console.log('abc') 
        break 	// necessary to add else all following cases will run 
    case 'xyz': 
        console.log('xyz') 
        break 
    default: 
        console.log('something else') 
        break 
}

// LOOPS

// For loop
// 'for of' used for arrays and strings 
// 'for in' used for objects

let arr = [1, 2, 3, 4, 5] 
for (let x of arr) { 
    console.log(x) 
} 

let obj = {chocolate: 'Cadbury', price: 100} 
for (let x in obj) { 
    console.log(x) 		// prints key 
    console.log(obj[x]) // prints value
} 
    
// While loop
let v = 0
while (v != 10) { 
    console.log(v++) 
}

// Random number generation
let rand = Math.floor(Math.random()*10) 	// generates a random number between 0 and 10 

// FUNCTIONS
// Declared functions - like in c++
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// Fuction expressions - named
let max = function findmax(arr){
    let max = -1;
    for (let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

// Fuction expressions - annonymous
let min = function(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

// ARROW Functions
// cannot be used wherever 'this' is required. E.g methods in objects, constructors, event listeners etc.
let avg = (arr) => sum(arr)/arr.length

arr = [1, 2, 3, 4, 5, 7];
console.log("sum: ", sum(arr));
console.log("Max: ", max(arr));
console.log("Min: ", min(arr));
console.log("Avg: ", avg(arr));


// ARRAYS Common Functions
let nums = [1, 2, 3, 4]
console.log(nums.length)
console.log(Math.max(nums))     // NaN since Math.max accepts numbers not array
console.log(Math.max(...nums))  // spread operator
nums.push(5)                    // adds element on end
nums.unshift(0)                 // adds element in start
nums.pop()                      // removes last element

// Make new arrays
let numss = [nums, 5, 6]        // [[0, 1, 2, 3, 4], 5, 6] 
let numsz = [...nums, 5, 6]     // [0, 1, 2, 3, 4, 5, 6]

// Destructing an array
// [a, b] = nums 	// a = 0, b = 1 
// [a, b, c, d, e] = nums	// a = 0, b = 1, c = 2, d = 3, e = 4

// Splice
// from index 1, remove 3 elements
// returns sliced part as an array
// nums will no longer have the sliced part
let smallnums = nums.splice(1, 3) 

// Sort
// sort() works perfectly for array of strings
// For array of numbers or objects - comparison function used.
// A comparison function takes two arguments and returns:
// A negative value if the first argument should come before the second.
// Zero if the first and second arguments are considered equal.
// A positive value if the first argument should come after the second.
// Therefore, you manipulate its usage accordingly.

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

let chocos = [
    { choco: 'milkyway', price: 300 },
    { choco: 'snickers', price: 380 },
    { choco: 'dairy milk', price: 100 },
    { choco: 'tobelerone', price: 400 },
    { choco: 'mars', price: 320 },
    { choco: 'kinder', price: 500 }
];

// Sort by price in ascending order
chocos.sort((a, b) => a.price - b.price); // using comprison function in sort
console.log(chocos);

// For Each
// accepts a function
// applies a function to all elements of the array
// does not return a new array
nums.forEach(num => {
    sum += num; // Accumulate sum
});
console.log(sum);

nums.forEach((element, index) =>console.log('Index: ', index, ' Value: ', element))

// Array Methods
// ---------------------------------------------------------------------------------
// MAP
// accepts a function
// applies a function to all elements of the array
// Returns a new array of the same length with transformed elements.
// purely for transforming data

arr = [1, 2, 3, 4, 5, 7];
let newarr = arr.map((element, index) => element + index);
console.log("Array Addition: ", newarr);

// array of objects
let choco_prices = [
    { choco: 'milkyway', price: 300 },
    { choco: 'snickers', price: 380 },
    { choco: 'dairy milk', price: 100 },
    { choco: 'tobelerone', price: 400 },
    { choco: 'mars', price: 320 },
    { choco: 'kinder', price: 500 }
]

let prices = choco_prices.map((choco_obj) => {
    return choco_obj.price;
});
console.log("Chocolate prices: ", prices);


// FILTER 
// accepts a function
// extracts elements from an array that meet a certain condition(s)
// return an array (length may vary)

let expensive_chocos = choco_prices.filter(choco_obj => {
    if (choco_obj.price > 350) return choco_obj.choco} 
);
console.log("Expensive Chocolates: ", expensive_chocos);

// FIND 
// accepts a function
// returns first element that meets a certain conditon(s)

// Find the cheapest chocolate
// we need the prices array - refer above
// get min of prices
min = Math.min(...prices)

let cheapest_choco = choco_prices.find(choco_obj=>{
    if (choco_obj.price == min){
        return choco_obj
    }
})

// combined version of above 
let cheap_choco = choco_prices.find(choco_obj => choco_obj.price === Math.min(...choco_prices.map(choco_obj => choco_obj.price)))

console.log("Cheapest chocolate: ", cheap_choco)

// REDUCE
// accepts a function
// reduce the elements of an array to a single value
// returns a value/object (we specify this)

let sum2 = arr.reduce((acc, element) => acc + element, 0)  // zero is default value of the acc
console.log("Sum using Reduce: ", sum2)

// What is the count of each animal in the fol. array
let animals = ['dog', 'dog', 'hen', 'hen', 'hen', 'cat', 'monkey', 'monkey', 'lion', 'peacock', 'kangaroo']
let animal_count = animals.reduce((animal_counts, animal)=>{
    if (animal_counts[animal] != undefined){
        animal_counts[animal] += 1;
    }
    else animal_counts[animal] = 1;
    return animal_counts;
}, {})      // {} specifies animal_counts is an empty obj by default

// Output:  { dog: 2, hen: 3, cat: 1, monkey: 2, lion: 1, peacock: 1, kangaroo: 1 }
console.log("Animal Count: ", animal_count)

let price_sum = choco_prices.reduce((acc, choco_obj) => acc + choco_obj.price, 0)
console.log("Price sum: ", price_sum)

// SOME
// accepts a function
// return true if atleast one elements passes the condition
// else false

let hasEvenNumber = nums.some(number => number % 2 === 0);
console.log(hasEvenNumber); // true

let hasCheapChocolate = choco_prices.some(choco => choco.price < 200);
console.log(hasCheapChocolate); // true

// EVERY
// accepts a function
// return true if all elements passes the condition
// else false 

let isEven = nums.every(number => number % 2 === 0);
console.log(isEven);

let isCheap = choco_prices.every(choco => choco.price < 200);
console.log(isCheap);


// -------------------------------------------------------------------------------
// OBJECTS

let character = {   name: 'Aurora', 
                    health: 30, 
                    strength: 50, 
                    // Can not make arrow functions inside objects, can not identify this
                    describe() { 
                        return '${this.name} has health points ${this.health}' 
                    } 
                }
    
// Adding a property
character.favfood = 'pasta' 	// now 5 properties instead of 4 
console.log(character)

// Spread operator
let newchar = {...character, sport: "football"}

// Destructuring an object
var person = { name: 'Haleema', sport: 'badminton'};
var {name, sport} = person 
 
console.log(name, sport)

// blueprint for creating objects later: 
function Parent(n, a){ this.name = n, 
                        this.age = a, 
                        this.display = function() { 
                            return '${this.name} has age ${this.age}' 
                        } 
                    } 
let p1 = new Parent('Sara', 30) 
p1.display() 
let p2 = new Parent(p1.name, p1.age) 	// if something in changed in p1, changes will not be reflected in p2 (passing by value) 
p2.favfood = 'biryani' 	// now 4 properties instead of 3 
p1.favfood 	// undefined 

// can not dynamically add a property to the blueprint like this: Parent.sport = 'cricket' 
p1.sport 	// undefined 
p2.sport 	// undefined 
// can do this way: Parent.prototype.sport = 'cricket' 
p1.sport 	// cricket 
p2.spory 	// cricket 


// -------------------------------------------------------------------------------
// CLASSES
class charac { 
    constructor(n, a) { 
        this.name = n; 
        this.age = a; 
    } 
    describe() { 
        return this.name + ' having age ' + this.age 
    } 
} 
    let ch1 = new charac('Sara', 30) 
    //no concept of classes in js, it links your created object with its own built-in object datatype. prototype is always an object 
    let obj2 = Object.create(obj) 
    obj2 	// will print previous obj (deep copy) 
    

// ------------------------------------------------------------------------------------------------------------------------------------
// Imperative Vs Declarative Programming 

// Imperative approach, code explicitly defines how to accomplish a task step-by-step.
// Imperative code tends to be more procedural and often includes mutable state (changing values of variables over time) 
// Declarative approach: 
//      1. code simplified / reduced 
//      2. can use es6 features 
//      3. no mutations 

// Converting from Imperative to Declarative: 
//      1. remove all mutations by converting all 'lets' to 'consts' 
//      2. maximum workings should be in functions, instead of global tasks 
//      3. convert functions to pure functions 
//      4. use js es6 features instead of simpler functionalities 
// pure functions: functions that do not use any global data directly, they will always return the same answer given in the same list of arguments 
