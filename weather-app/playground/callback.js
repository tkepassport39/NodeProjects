// creating a function with a callback
var getUser = (id, callback) => {
    // creating a simple object
    var user = {
        id: id,
        name: 'Antonio'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
    //callback(user);
};

// calling my function with call back
// expecting a user to get returned from callback function
getUser(31, (userObject) => {
    console.log(userObject);
});