// const { element } = require("three/examples/jsm/nodes/Nodes.js");

const array = [1, 4, 5, "Banana", 6,1,4,4,9,3,"Banana"];

const uniqueElements = array.filter ((element, index) => {
    return array.indexOf(element) === index
});

console.log(uniqueElements)