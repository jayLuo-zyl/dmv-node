module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    }
}

var my_app = require('./app');

console.log(my_app)
console.log()

// The following function from app.js will be executed.
// function 2nd
my_app.sayHi();
// function 1st
my_app.showMsg();
// function 3rd
my_app.getSum(9,9)