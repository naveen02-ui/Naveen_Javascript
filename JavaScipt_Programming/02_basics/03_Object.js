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
object.freeze(JSuser) // it will freeze the object and we cannot change the properties of the object
JSuser.email = "naveen@microsoft.com"
console.log(JSuser);

