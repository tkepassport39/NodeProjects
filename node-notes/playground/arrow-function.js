// creating arrow function
// var square = (x) => {
//     var result = x * x;
//     return result;
// };

var square = x => x * x;

console.log(square(9));

// create user object
var user = {
    name: 'Anthony',
    // arrow function would not work
    sayHi: () => {
        console.log(`hi, i'm ${this.name}`);
    },
    // es6 feature, creat methods on objects [not arrow function]
    // definding object literals
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi, i'm ${this.name}`);
    }
};

user.sayHiAlt(1, 2, 3);