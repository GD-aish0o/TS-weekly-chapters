// example:
var var1 = 89;
if (var1 == null) {
    console.log("please enter a number");
}
else {
    console.log("your result is ".concat(var1));
}
// Narrowing in typescript:
// narrowing the data types and shortcuts into one out of two or more.
// narrowing doesn't change data types, it just chooses any one of the given based upon the value.
var pass; //currently if this var is empty is called union of string & number 
pass = "scoooby";
console.log(pass);
pass = 90813;
console.log(pass);
pass = true;
var Age = Math.random() > 0.6 ? "khan" : 60;
// 
// another syntax of type of:
// console.log(typeof (Age));
if (typeof Age === "string") {
    Age.toUpperCase();
}
else {
    Age.toFixed;
}
console.log(typeof Age);
var Person;
// assining value to the IPerson key "Name".
var IPerson = {
    name: "Halder"
};
;
var Table1 = {
    food: "Biryani",
    Drink: "Chai"
};
var Table2 = {
    Drink: "Apple Juice",
};
var Order1 = Table2;
var Order2 = Table1;
// Structural Typing:
