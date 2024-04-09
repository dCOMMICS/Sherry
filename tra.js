// const { element } = require("three/examples/jsm/nodes/Nodes.js");

const array = [1, 4, 5, "Banana", 6,1,4,4,9,3,"Banana"];

const uniqueElements = array.filter ((element, index) => {
    return array.indexOf(element) === index
});

console.log(uniqueElements)


//  write a function to generate a fibonacci series of a given length.

function fibonacci(length) {
    // initializing the array with the first two numbers of the series
    fibArray = [0,1];

    // generating the rest  of the series

    for (let i = 2; i < length; i++) {
        fibArray.push(fibArray[i]) + fibArray[i + 2];
    }

    return fibArray;
}

const series = fibonacci(7);


// reverse string using inbuilt methods and without methods

let string = 'javascript';

let reversed = string.split('').reverse().join('');
console.log(reversedString);