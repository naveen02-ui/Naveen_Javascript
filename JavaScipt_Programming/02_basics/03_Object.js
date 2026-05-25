// singleton
// object.create
// object literals

const mySym = Symbol("key1")
const JSuser = {
    name: "Naveen",
    "Full name": "Naveen Suman",
    [mySym]: "myKey1",
    age: 21,
    location: "India",
    email: "naveen@example.com",
    isLoggesIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
console.log(JSuser.name);
console.log(JSuser["name"]) // both are same but second one is used when we want to access property with space or special character
console.log(JSuser["Full name"]); // it is used to access property with space or special character
console.log(JSuser[mySym]); // Important case to access symbol property

JSuser.email = "naveen@google.com"
// object.freeze(JSuser) // it will freeze the object and we cannot change the properties of the object
// JSuser.email = "naveen@microsoft.com"
console.log(JSuser); // it will not change the email property because the object is frozen

JSuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JSuser.greeting()); // it will call the greeting function and print "Hello JS user" with undefined because the function does not return anything
console.log(JSuser.greeting); // it will print the function definition because we are not calling the function, we are just accessing the function property of the object
