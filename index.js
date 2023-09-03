//Advance JS Topics

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

//Closures
//The inner function (closure) can access the variable defined in its scope (variables defined between its curly brackets), in the scope of its parent function, and the global variables.
//Example

const first = () => {
    const greet = "Hi";
    const second = () => {
        const name = "Rock";
        console.log(greet);
    };
    return second;
};
const newFunc = first();
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
