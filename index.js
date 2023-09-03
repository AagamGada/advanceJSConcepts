//Advance JS Concepts

//Hoisting
//Javascript interpreter always moves the variables and function declaration to the top of the current scope (function scope or global scope) before the code execution.
//Example

buyCar();
function buyCar() {
    console.log("Ferrari");
}

a = 5;
console.log(a);
var a;

//In this example, the variable x will be logged before it is declared. The code runs without any error and will log undefined to the console because only the variable declaration is hoisted to the top of the scope, but the assignment is not.
console.log(x); // Output: undefined
var x = 10;


//Closures
//The inner function (closure) can access the variable defined in its scope (variables defined between its curly brackets), in the scope of its parent function, and the global variables.
//Example

const myFn = () => {
    const greet = "Hi";
    const second = () => {
        const name = "Rock";
        console.log(greet + ' ' + name);
    };
    return second;
};
const newFunc = myFn();
newFunc();


//Callback fn
//A callback is simply a function that is passed to another function as a parameter and is invoked or executed inside the other function.
//Example

const greeting = (name) => {
    console.log('Hello' + ' ' + name);
}
const processUserName = (callback) => {
    const name = 'Aagam';
    callback(name);
}
processUserName(greeting);

//Promises
//asynchronous operation
//Example 1
var promise = new Promise(function (resolve, reject) {
    const x = "geek";
    const y = "geek";
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });

//Example 2
//Use a promise to get the result of an asynchronous operation
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
};

//Call the fetchData function and handle the promise result
fetchData().then(result => {
    console.log(result);
});


//synchronous console
console.log('hi there');


//Async/Await
const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received with async await");
        }, 1000);
    });
};

const getData = async () => {
    try {
        const result = await fetchData1();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

getData();


//Type coercion

// Example 1
console.log(5 + "5"); // Output: "55"

// Example 2
console.log("5" * 2); // Output: 10

// Example 3
console.log(false == 0); // Output: true

// Example 4
console.log(null == undefined); // Output: true


//Destructuring

//Destructuring Arrays
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//Destructuring Objects
const person = {
    name1: 'Paul Knulst',
    role: 'Tech Lead',
    address: {
        street: 'Blogstreet',
        city: 'Anytown',
        country: 'Germany'
    }
};

const { name1, role, address: { city, ...address }, landmark = 'unknown' } = person;

console.log(name1); // Output: Paul Knulst
console.log(role); // Output: Tech Lead
console.log(city); // Output: Anytown
console.log(address); // Output: { street: 'Blogstreet', country: 'Germany' }
console.log(landmark); // Output: Unknown


//Spread Operator

//Arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

//Obejcts
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle);


//Rest Operator

// es6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15            

 // rest with function and other arguments
 function fun1(a,b,...c){
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun1('Mukul','Latiyan','Lionel','Messi','Barcelona');