console.log("Week 4 - Hello World");

// Document Object Modeld

let greeting = document.getElementById('greeting');
console.log(greeting);

// Task
// Get all instances of <p>

let paras = document.getElementsByTagName('p');
console.log(paras);

// item of array - retrieves element
// item in array - retrieves index 
for (para of paras) {
    // console.log(para.innerText);

    para.innerText = "Booyah";
}


// var & let

var something = 'something';
let another = 'another';

// var something = 'new something';
// console.log(something);

// let another = 'new another'; Cannot redeclare let variables 
// console.log('new another');

if (3 > 2) {
    let another = 'another inside block scope';
    console.log(another)
}

console.log(another);