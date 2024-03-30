// Javascript Basics

// Declared functions - usual
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


// MAP method is used when we want to perform some operation on arrays and then return the modified array of same size. 
let newarr = arr.map(element => element + 2);
console.log("Array Addition: ", newarr);

let choco_prices = [
    { choco: 'milkyway', price: 300 },
    { choco: 'snickers', price: 380 },
    { choco: 'dairy milk', price: 100 },
    { choco: 'tobelerone', price: 400 },
    { choco: 'mars', price: 320 },
    { choco: 'kinder', price: 500 }
]

let prices = choco_prices.map(choco_obj => choco_obj.price );
console.log("Chocolate prices: ", prices);


// FILTER method is used when we want to extract all elements from an array that meet a certain condition. 
let expensive_chocos = choco_prices.filter(choco_obj => {
    if (choco_obj.price > 350) return choco_obj} 
);
console.log("Above Average Prices: ", expensive_chocos);


// FIND method will return the first element that meets a certain specified criteria.
let cheapest_choco = choco_prices.find(choco_obj=>{
    // we need the prices array - can be done using map
    let prices = choco_prices.map(choco_obj => choco_obj.price)

    //get min of prices array
    min = Math.min(...prices)

    if (choco_obj.price == min){
        return choco_obj
    }
})

// combined version of above 
let cheap_choco = choco_prices.find(choco_obj => choco_obj.price === Math.min(...choco_prices.map(choco_obj => choco_obj.price)))

console.log("Cheapest chocolate: ", cheap_choco)

// REDUCE method is used when we want to reduce the elements of an array to a single value
let sum2 = arr.reduce((acc, element) => acc + element, 0)
console.log("Sum using Reduce: ", sum2)

let animals = ['dog', 'dog', 'hen', 'hen', 'hen', 'cat', 'monkey', 'monkey', 'lion', 'peacock', 'kangaroo']
// Output:  { dog: 2, hen: 3, cat: 1, monkey: 2, lion: 1, peacock: 1, kangaroo: 1 }
let animal_count = animals.reduce((animal_counts, animal)=>{
    if (animal_counts[animal] != undefined){
        animal_counts[animal] += 1;
    }
    else animal_counts[animal] = 1;
    return animal_counts;
}, {})

console.log("Animal Count: ", animal_count)

let price_sum = choco_prices.reduce((acc, choco_obj) => acc + choco_obj.price, 0)
console.log("Price sum: ", price_sum)